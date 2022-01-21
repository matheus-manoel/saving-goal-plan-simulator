import Header from '../../components/Header';
import SavingGoalPaper from '../../components/SavingGoalPaper';

import { Bold, Headline, HeadlineWrapper, SavingGoalPageBody } from './styles';

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
      </SavingGoalPageBody>
    </>
  );
}
