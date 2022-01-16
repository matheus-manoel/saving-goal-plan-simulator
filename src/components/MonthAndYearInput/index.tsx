import { Dispatch, SetStateAction } from 'react';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useKeyPress from '../../customHooks/useKeyPress';

dayjs.extend(localeData);

interface MonthAndYearInputProps {
  label?: string;
  onChangeValue?: Dispatch<
    SetStateAction<{ month: number; year: number; writtenMonth: string }>
  >;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const MonthAndYearInputTitle = styled.label``;

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
  const { label, onChangeValue } = props;
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

    if (onChangeValue) {
      onChangeValue({
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
      {label && <MonthAndYearInputTitle>{label}</MonthAndYearInputTitle>}
      <InnerWrapper>
        <button
          onClick={onLeftArrowButtonClick}
          disabled={shouldDisableLeftArrow}
        >
          {'<'}
        </button>
        <MonthAndYearWrapper>
          <MonthText>{dayjs.months()[date.month()]}</MonthText>
          <YearText>{date.year()}</YearText>
        </MonthAndYearWrapper>
        <button onClick={onRightArrowButtonClick}>{'>'}</button>
      </InnerWrapper>
    </OuterWrapper>
  );
}
