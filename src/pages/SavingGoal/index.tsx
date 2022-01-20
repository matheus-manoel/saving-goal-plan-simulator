import Header from '../../components/Header';
import SavingGoalPaper from '../../components/SavingGoalPaper';
import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/naming-convention
const SavingGoalPageBody = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const HeadlineWrapper = styled.div``;

// eslint-disable-next-line @typescript-eslint/naming-convention
const Headline = styled.p`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: ${(props) => props.theme.fonts.weights.light};
  color: ${(props) => props.theme.colors.brandColorPrimary};
  font-size: 20px;
  line-height: 24px;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const Bold = styled.span`
  font-weight: ${(props) => props.theme.fonts.weights.bold};
`;

export default function SavingGoalPage(): JSX.Element {
  return (
    <>
      <Header />
      <SavingGoalPageBody>
        <HeadlineWrapper>
          <Headline>
            {`Let's plan your`}
            <Bold> {`saving goal.`}</Bold>
          </Headline>
        </HeadlineWrapper>
        <SavingGoalPaper />
        <div></div>
      </SavingGoalPageBody>
    </>
  );
}
