import { useEffect, useState } from 'react';
import styled from 'styled-components';
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

export default function SavingGoalPaper(): JSX.Element {
  const [totalAmount, setTotalAmount] = useState<number>(25000);

  useEffect(() => {
    console.log(totalAmount);
  }, [totalAmount]);

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
        <MonthAndYearInput label={'Reach goal by'} />
      </InputWrapper>

      <ResultsWrapper>
        <ResultsMainRow>
          <ResultsLabel>Monthly amount</ResultsLabel>
          <ResultsValue>$520.83</ResultsValue>
        </ResultsMainRow>
        <ResultsMonthlyDepositsInfo>
          {`Youre planning 48 monthly deposits to reac your $25,000 goal by October 2020.`}
        </ResultsMonthlyDepositsInfo>
        <ResultsSecondaryRow></ResultsSecondaryRow>
      </ResultsWrapper>
    </Paper>
  );
}
