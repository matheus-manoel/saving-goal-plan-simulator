import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import { render, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';

import MonthAndYearInput from '.';
import main from '../../../styles/themes/main';

dayjs.extend(localeData);

let today: dayjs.Dayjs;
beforeEach(() => {
  cleanup();
  today = dayjs();
});

const setUp = (label?: string) => {
  const component = label
    ? render(
        <ThemeProvider theme={main}>
          <MonthAndYearInput label={label} />
        </ThemeProvider>
      )
    : render(
        <ThemeProvider theme={main}>
          <MonthAndYearInput />
        </ThemeProvider>
      );
  return {
    component,
    monthText: component.getByTestId('month_and_year_input_month_text'),
    yearText: component.getByTestId('month_and_year_input_year_text'),
    rightArrowButton: component.getByTestId(
      'month_and_year_input_right_arrow_button'
    ),
    leftArrowButton: component.getByTestId(
      'month_and_year_input_left_arrow_button'
    ),
    ...(label && {
      monthAndYearInputLabel: component.getByTestId(
        'month_and_year_input_label'
      ),
    }),
  };
};

it('renders without crashing', () => {
  ReactDOM.render(
    <ThemeProvider theme={main}>
      <MonthAndYearInput />
    </ThemeProvider>,
    document.createElement('div')
  );
});

it('should render label passed by props', () => {
  const expectedLabel = 'this is the label';
  const { monthAndYearInputLabel } = setUp(expectedLabel);

  expect(monthAndYearInputLabel?.innerHTML).toBe(expectedLabel);
});

it('should render same month as today', () => {
  const { monthText } = setUp();

  expect(monthText.innerHTML).toBe(
    dayjs.months()[today.add(1, 'year').month()]
  );
});

it('should render year text as a year from today', () => {
  const { yearText } = setUp();

  expect(yearText.innerHTML).toBe(today.add(1, 'year').year().toString());
});

it('should disable button if date is one month from today', () => {
  const { leftArrowButton } = setUp();

  for (let i = 0; i < 11; i++) {
    userEvent.click(leftArrowButton);
  }

  expect(leftArrowButton).toBeDisabled();
});

it('should change date with arrow keys if button on focus', () => {
  const { rightArrowButton, monthText } = setUp();

  userEvent.click(rightArrowButton);
  userEvent.keyboard('{arrowright}');
  userEvent.keyboard('{arrowleft}');
  userEvent.keyboard('{arrowleft}');
  userEvent.keyboard('{arrowleft}');

  expect(monthText.innerHTML).toBe(
    dayjs.months()[today.add(2, 'month').subtract(3, 'month').month()]
  );
});

it('should not change date with arrow keys if button not on focus', () => {
  const { monthText } = setUp();

  userEvent.keyboard('{arrowright}');
  userEvent.keyboard('{arrowleft}');
  userEvent.keyboard('{arrowleft}');
  userEvent.keyboard('{arrowleft}');

  expect(monthText.innerHTML).toBe(dayjs.months()[today.month()]);
});

it('should disable left arrow button if change to next month using keyboard arrows', () => {
  const { leftArrowButton } = setUp();

  userEvent.click(leftArrowButton);
  for (let count = 0; count < 10; count++) {
    userEvent.keyboard('{arrowleft}');
  }

  expect(leftArrowButton).toBeDisabled();
});
