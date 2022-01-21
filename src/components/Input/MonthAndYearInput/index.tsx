import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';

import useKeyPress from '../../../customHooks/useKeyPress';
import { Label } from '../styles';
import { ReactComponent as ArrowLeftIcon } from '../../../assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../../assets/icons/arrow-right.svg';
import {
  InnerWrapper,
  MonthAndYearWrapper,
  MonthText,
  OuterWrapper,
  StyledButton,
  YearText,
} from './styles';

dayjs.extend(localeData);

export interface MonthAndYearInputProps {
  label?: string;
  onChangeDate?: Dispatch<
    SetStateAction<{ month: number; year: number; writtenMonth: string }>
  >;
}

export default function MonthAndYearInput(
  props: MonthAndYearInputProps
): JSX.Element {
  const { label, onChangeDate } = props;
  const [date, setDate] = useState(dayjs().add(1, 'year'));
  const [shouldDisableLeftArrow, setShouldDisableLeftArrow] = useState(false);
  const isArrowRightPressed = useKeyPress('ArrowRight');
  const isArrowLeftPressed = useKeyPress('ArrowLeft');
  const [areButtonsOnFocus, setAreButtonsOnFocus] = useState(false);

  const onRightArrowButtonClick = () => {
    setDate(date.add(1, 'month'));
  };

  const onLeftArrowButtonClick = () => {
    setDate(date.subtract(1, 'month'));
  };

  useEffect(() => {
    const today = dayjs();
    const nextMonth = today.month() + 1;

    if (date.month() === nextMonth && date.year() === today.year()) {
      setShouldDisableLeftArrow(true);
    } else {
      setShouldDisableLeftArrow(false);
    }

    if (onChangeDate) {
      onChangeDate({
        month: date.month(),
        year: date.year(),
        writtenMonth: dayjs.months()[date.month()],
      });
    }
  }, [date]);

  useEffect(() => {
    if (areButtonsOnFocus) {
      if (isArrowRightPressed) {
        setDate((date) => date.add(1, 'month'));
      } else if (isArrowLeftPressed && !shouldDisableLeftArrow) {
        setDate((date) => date.subtract(1, 'month'));
      }
    }
  }, [areButtonsOnFocus, isArrowLeftPressed, isArrowRightPressed]);

  return (
    <OuterWrapper
      onFocus={() => setAreButtonsOnFocus(true)}
      onBlur={() => setAreButtonsOnFocus(false)}
    >
      {label && (
        <Label data-testid={'month_and_year_input_label'}>{label}</Label>
      )}
      <InnerWrapper>
        <StyledButton
          onClick={onLeftArrowButtonClick}
          disabled={shouldDisableLeftArrow}
          data-testid={'month_and_year_input_left_arrow_button'}
        >
          <ArrowLeftIcon />
        </StyledButton>
        <MonthAndYearWrapper>
          <MonthText data-testid={'month_and_year_input_month_text'}>
            {dayjs.months()[date.month()]}
          </MonthText>
          <YearText data-testid={'month_and_year_input_year_text'}>
            {date.year()}
          </YearText>
        </MonthAndYearWrapper>
        <StyledButton
          onClick={onRightArrowButtonClick}
          data-testid={'month_and_year_input_right_arrow_button'}
        >
          <ArrowRightIcon />
        </StyledButton>
      </InnerWrapper>
    </OuterWrapper>
  );
}
