import { useEffect, useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { ReactComponent as HouseIcon } from '../../assets/icons/buy-a-house.svg';
import CurrencyInput from '../CurrencyInput';
import MonthAndYearInput from '../MonthAndYearInput';

// eslint-disable-next-line @typescript-eslint/naming-convention
const Paper = styled.div`
  height: 511px;
  width: 560px;
  background: #ffffff;
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
  padding: 40px;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const Header = styled.div`
  display: flex;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const HeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const HeaderTitle = styled.div``;

// eslint-disable-next-line @typescript-eslint/naming-convention
const HeaderSubtitle = styled.div``;

// eslint-disable-next-line @typescript-eslint/naming-convention
const InputWrapper = styled.div`
  display: flex;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const ResultsMainRow = styled.div`
  display: flex;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const ResultsSecondaryRow = styled.div``;

// eslint-disable-next-line @typescript-eslint/naming-convention
const ResultsLabel = styled.span``;

// eslint-disable-next-line @typescript-eslint/naming-convention
const ResultsValue = styled.span``;

// eslint-disable-next-line @typescript-eslint/naming-convention
const ResultsMonthlyDepositsInfo = styled.span``;

// eslint-disable-next-line @typescript-eslint/naming-convention
const ConfirmButton = styled.button``;

export default function SavingGoalPaper(): JSX.Element {
  const initialDate = dayjs().add(1, 'year');
  const [totalAmount, setTotalAmount] = useState<number>(25000);
  const [reachDate, setReachDate] = useState<{
    month: number;
    year: number;
    writtenMonth: string;
  }>({
    month: initialDate.month(),
    year: initialDate.year(),
    writtenMonth: '',
  });
  const [monthlyAmount, setMonthlyAmount] = useState<number>(25000 / 12);
  const [monthsUntilReachDate, setMonthsUntilReachDate] = useState<number>(12);

  useEffect(() => {
    const newMonthsUntilReachDate = dayjs()
      .day(2)
      .year(reachDate.year)
      .month(reachDate.month)
      .diff(dayjs().day(1), 'month');
    setMonthsUntilReachDate(newMonthsUntilReachDate);
    setMonthlyAmount(totalAmount / newMonthsUntilReachDate);
  }, [totalAmount, reachDate]);

  return (
    <Paper>
      <Header>
        <HouseIcon />
        <HeaderTextWrapper>
          <HeaderTitle>Buy a house</HeaderTitle>
          <HeaderSubtitle>Saving goal</HeaderSubtitle>
        </HeaderTextWrapper>
      </Header>

      <InputWrapper>
        <CurrencyInput label={'Total amount'} onChangeValue={setTotalAmount} />
        <MonthAndYearInput
          label={'Reach goal by'}
          onChangeValue={setReachDate}
        />
      </InputWrapper>

      <ResultsWrapper>
        <ResultsMainRow>
          <ResultsLabel>Monthly amount</ResultsLabel>
          <ResultsValue>{monthlyAmount}</ResultsValue>
        </ResultsMainRow>
        <ResultsMonthlyDepositsInfo>
          {`Youre planning ${monthsUntilReachDate} monthly deposits to reach your ${totalAmount} goal by ${reachDate.writtenMonth} ${reachDate.year}.`}
        </ResultsMonthlyDepositsInfo>
        <ResultsSecondaryRow></ResultsSecondaryRow>
      </ResultsWrapper>

      <ConfirmButton>Confirm</ConfirmButton>
    </Paper>
  );
}
