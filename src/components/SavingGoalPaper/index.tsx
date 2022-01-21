import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import numeral from 'numeral';

import { ReactComponent as HouseIcon } from '../../assets/icons/buy-a-house.svg';
import {
  Bold,
  ButtonWrapper,
  ConfirmButton,
  CurrencyInputWrapper,
  Header,
  HeaderSubtitle,
  HeaderTextWrapper,
  HeaderTitle,
  InputsWrapper,
  MonthAndYearInputWrapper,
  MonthlyAmountText,
  Paper,
  ResultsLabel,
  ResultsMainRow,
  ResultsMonthlyDepositsInfo,
  ResultsWrapper,
} from './styles';
import Input from '../Input';

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

      <InputsWrapper>
        <CurrencyInputWrapper>
          <Input
            type={'currency'}
            label={'Total amount'}
            onChangeValue={setTotalAmount}
          />
        </CurrencyInputWrapper>
        <MonthAndYearInputWrapper>
          <Input
            type={'monthAndYear'}
            label={'Reach goal by'}
            onChangeDate={setReachDate}
          />
        </MonthAndYearInputWrapper>
      </InputsWrapper>

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
          {`You're planning`}{' '}
          <Bold>{`${monthsUntilReachDate} monthly deposits`}</Bold>{' '}
          {`to reach your`}{' '}
          <Bold>{`${numeral(totalAmount).format(currencyFormat)}`}</Bold>{' '}
          {`goal by`}
          <Bold> {`${reachDate.writtenMonth} ${reachDate.year}.`}</Bold>
        </ResultsMonthlyDepositsInfo>
      </ResultsWrapper>

      <ButtonWrapper>
        <ConfirmButton>Confirm</ConfirmButton>
      </ButtonWrapper>
    </Paper>
  );
}
