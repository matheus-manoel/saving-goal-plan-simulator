import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

dayjs.extend(localeData);

interface MonthAndYearInputProps {
  label?: string;
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
  const { label } = props;
  const [date, setDate] = useState(dayjs().add(1, 'year'));
  const [shouldDisableLeftArrow, setShouldDisableLeftArrow] = useState(false);

  const onRightArrowButtonClick = () => {
    setDate(date.add(1, 'month'));
  };

  const onLeftArrowButtonClick = () => {
    setDate(date.subtract(1, 'month'));
  };

  useEffect(() => {
    const today = dayjs();
    if (date.month() === today.month() && date.year() === today.year()) {
      setShouldDisableLeftArrow(true);
    } else {
      setShouldDisableLeftArrow(false);
    }
  }, [date]);

  return (
    <OuterWrapper>
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
