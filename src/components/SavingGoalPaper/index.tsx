import { useEffect, useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import numeral from 'numeral';

import { ReactComponent as HouseIcon } from '../../assets/icons/buy-a-house.svg';
import Input from '../Input';

// eslint-disable-next-line @typescript-eslint/naming-convention
const Paper = styled.div`
  height: 431px;
  width: 460px;
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
const InputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  gap: 16px;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  background: ${(props) => props.theme.colors.neutralWhite};
  border: 1px solid ${(props) => props.theme.colors.blueGray50};
  border-radius: 4px;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const ResultsMainRow = styled.div`
  display: flex;
  height: 78px;
  justify-content: space-between;
  align-items: center;
  margin-left: 32px;
  margin-right: 32px;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const ResultsLabel = styled.p`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: ${(props) => props.theme.fonts.weights.light};
  font-size: 20px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.blueGray900};
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const MonthlyAmountText = styled.p`
  font-weight: ${(props) => props.theme.fonts.weights.normal};
  color: ${(props) => props.theme.colors.brandColorSecondary};
  font-size: 32px;
  line-height: 38.4px;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const ResultsMonthlyDepositsInfo = styled.p`
  background: ${(props) => props.theme.colors.background};
  height: 32px;
  padding: 24px 32px;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: ${(props) => props.theme.fonts.weights.light};
  font-size: 12px;
  line-height: 16px;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const Bold = styled.span`
  font-weight: ${(props) => props.theme.fonts.weights.bold};
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const ConfirmButton = styled.button`
  width: 320px;
  height: 56px;
  background: ${(props) => props.theme.colors.brandColorPrimary};
  border-radius: 32px;
  color: ${(props) => props.theme.colors.neutralWhite};
  margin-top: 24px;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const CurrencyInputWrapper = styled.div`
  width: 272px;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const MonthAndYearInputWrapper = styled.div`
  width: 192px;
`;

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
