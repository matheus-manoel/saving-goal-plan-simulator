import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import styled from 'styled-components';

import useKeyPress from '../../../customHooks/useKeyPress';
import { Label } from '../styles';

dayjs.extend(localeData);

export interface MonthAndYearInputProps {
  label?: string;
  onChangeDate?: Dispatch<
    SetStateAction<{ month: number; year: number; writtenMonth: string }>
  >;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const InnerWrapper = styled.div`
  display: flex;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const MonthAndYearWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const MonthText = styled.span``;

// eslint-disable-next-line @typescript-eslint/naming-convention
const YearText = styled.span``;

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
    if (date.month() === today.month() + 1 && date.year() === today.year()) {
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
        <button
          onClick={onLeftArrowButtonClick}
          disabled={shouldDisableLeftArrow}
          data-testid={'month_and_year_input_left_arrow_button'}
        >
          {'<'}
        </button>
        <MonthAndYearWrapper>
          <MonthText data-testid={'month_and_year_input_month_text'}>
            {dayjs.months()[date.month()]}
          </MonthText>
          <YearText data-testid={'month_and_year_input_year_text'}>
            {date.year()}
          </YearText>
        </MonthAndYearWrapper>
        <button
          onClick={onRightArrowButtonClick}
          data-testid={'month_and_year_input_right_arrow_button'}
        >
          {'>'}
        </button>
      </InnerWrapper>
    </OuterWrapper>
  );
}
