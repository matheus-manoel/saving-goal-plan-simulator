import { useEffect, useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import numeral from 'numeral';

import { ReactComponent as HouseIcon } from '../../assets/icons/buy-a-house.svg';
import Input from '../Input';

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
  margin-top: 5px;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const HeaderTitle = styled.h2`
  font-weight: ${(props) => props.theme.fonts.weights.normal};
  font-size: 24px;
  line-height: 28.8px;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const HeaderSubtitle = styled.p`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: ${(props) => props.theme.fonts.weights.light};
  color: ${(props) => props.theme.colors.blueGray400};
  font-size: 16px;
  line-height: 24px;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const InputWrapper = styled.div`
  display: flex;
  margin-top: 28px;
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
const MonthlyAmountText = styled.span``;

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
  const currencyFormat = '$0,0.00';

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
        <Input
          type={'currency'}
          label={'Total amount'}
          onChangeValue={setTotalAmount}
        />
        <Input
          type={'monthAndYear'}
          label={'Reach goal by'}
          onChangeDate={setReachDate}
        />
      </InputWrapper>

      <ResultsWrapper>
        <ResultsMainRow>
          <ResultsLabel>Monthly amount</ResultsLabel>
          <MonthlyAmountText
            data-testid={'saving_goal_paper_monthly_amount_text'}
          >
            {numeral(monthlyAmount).format(currencyFormat)}
          </MonthlyAmountText>
        </ResultsMainRow>
        <ResultsMonthlyDepositsInfo
          data-testid={'saving_goal_paper_results_monthly_deposits_info_text'}
        >
          {`You're planning ${monthsUntilReachDate} monthly deposits to reach your ${numeral(
            totalAmount
          ).format(currencyFormat)} goal by ${reachDate.writtenMonth} ${
            reachDate.year
          }.`}
        </ResultsMonthlyDepositsInfo>
        <ResultsSecondaryRow></ResultsSecondaryRow>
      </ResultsWrapper>

      <ConfirmButton>Confirm</ConfirmButton>
    </Paper>
  );
}
