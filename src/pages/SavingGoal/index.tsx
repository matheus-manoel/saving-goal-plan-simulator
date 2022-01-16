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

export default function SavingGoalPage(): JSX.Element {
  return (
    <>
      <Header />
      <SavingGoalPageBody>
        <span>Let{"'"}s plan your saving goal.</span>
        <SavingGoalPaper />
        <>ha</>
      </SavingGoalPageBody>
    </>
  );
}
