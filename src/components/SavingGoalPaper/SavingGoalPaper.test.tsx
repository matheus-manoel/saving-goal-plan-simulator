import SavingGoalPaper from '.';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReactDOM from 'react-dom';

dayjs.extend(localeData);

let today: dayjs.Dayjs;
beforeEach(() => {
  today = dayjs();
});
afterEach(cleanup);

it('renders without crashing', () => {
  ReactDOM.render(<SavingGoalPaper />, document.createElement('div'));
});

it('starts with expected monthly amount', () => {
  const expectedMonthlyAmount = '$2,083.33';

  const component = render(<SavingGoalPaper />);
  const monthlyAmount = component.getByTestId(
    'saving_goal_paper_monthly_amount_text'
  );

  expect(monthlyAmount.innerHTML).toBe(expectedMonthlyAmount);
});

it('starts with expected monthly deposits info', () => {
  const expectedResultsMonthlyDepositsInfo = `You're planning 12 monthly deposits to reach your $25,000.00 goal by ${
    dayjs.months()[today.add(1, 'year').month()]
  } ${today.add(1, 'year').year().toString()}.`;

  const component = render(<SavingGoalPaper />);
  const resultsMonthlyDepositisInfo = component.getByTestId(
    'saving_goal_paper_results_monthly_deposits_info_text'
  );

  expect(resultsMonthlyDepositisInfo.innerHTML).toBe(
    expectedResultsMonthlyDepositsInfo
  );
});

const setup50kWith12RightArrowClicks = () => {
  const component = render(<SavingGoalPaper />);
  const currencyInput = component.getByTestId('currency_input');
  const rightArrowButton = component.getByTestId(
    'month_and_year_input_right_arrow_button'
  );

  userEvent.type(currencyInput, '{selectall}50000');
  for (let counter = 0; counter < 12; counter++) {
    userEvent.click(rightArrowButton);
  }

  return component;
};

it('shows expected monthly deposits info after clicking the right arrow button 12 times and changing total amount to 50,000', () => {
  const expectedMonthlyAmount = '$2,083.33';

  const component = setup50kWith12RightArrowClicks();
  const monthlyAmount = component.getByTestId(
    'saving_goal_paper_monthly_amount_text'
  );

  expect(monthlyAmount.innerHTML).toBe(expectedMonthlyAmount);
});

it('shows right total amount after clicking the right arrow button 12 times and changing total amount to 50,000', () => {
  const expectedResultsMonthlyDepositsInfo = `You're planning 24 monthly deposits to reach your $50,000.00 goal by ${
    dayjs.months()[today.add(2, 'year').month()]
  } ${today.add(2, 'year').year().toString()}.`;

  const component = setup50kWith12RightArrowClicks();
  const resultsMonthlyDepositisInfo = component.getByTestId(
    'saving_goal_paper_results_monthly_deposits_info_text'
  );

  expect(resultsMonthlyDepositisInfo.innerHTML).toBe(
    expectedResultsMonthlyDepositsInfo
  );
});
