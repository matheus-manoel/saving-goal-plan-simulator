import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import styled from 'styled-components';

import useKeyPress from '../../../customHooks/useKeyPress';
import { InputStyle, Label } from '../styles';
import { ReactComponent as ArrowLeftIcon } from '../../../assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../../assets/icons/arrow-right.svg';

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
  ${InputStyle}
  display: flex;
  justify-content: space-around;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const MonthAndYearWrapper = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const StyledButton = styled.button`
  width: 20%;
  //color: ${(props) => props.color};
  fill: ${(props) =>
    props.disabled
      ? props.theme.colors.blueGray50
      : props.theme.colors.blueGray300};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const MonthText = styled.p`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: ${(props) => props.theme.fonts.weights.bold};
  color: ${(props) => props.theme.colors.blueGray900};
  font-size: 16px;
  line-height: 24px;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const YearText = styled.p`
  text-align: center;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: ${(props) => props.theme.fonts.weights.light};
  color: ${(props) => props.theme.colors.blueGray400};
  font-size: 16px;
  line-height: 24px;
`;

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
