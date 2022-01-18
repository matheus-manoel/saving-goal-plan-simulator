import { render, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';

import CurrencyInput from '.';
import main from '../../../styles/themes/main';

afterEach(cleanup);

const setUp = (label?: string) => {
  const component = label
    ? render(
        <ThemeProvider theme={main}>
          <CurrencyInput label={label} />
        </ThemeProvider>
      )
    : render(
        <ThemeProvider theme={main}>
          <CurrencyInput />
        </ThemeProvider>
      );
  return {
    component,
    currencyInput: component.getByTestId('currency_input'),
    ...(label && {
      currencyLabel: component.getByTestId('currency_input_label'),
    }),
  };
};

it('renders without crashing', () => {
  ReactDOM.render(<CurrencyInput />, document.createElement('div'));
});

it('should render label passed by props', () => {
  const expectedLabel = 'this is the label';
  const { currencyLabel } = setUp(expectedLabel);

  expect(currencyLabel?.innerHTML).toBe(expectedLabel);
});

it('does not print anything but numbers and dot', () => {
  const { currencyInput } = setUp();
  userEvent.type(currencyInput, '{selectall}-50e01 !@#% aoqrigfjbv.13');
  expect(currencyInput.value).toBe('$5,001.13');
});

it('does not accept leading zeroes except before dot and cents', () => {
  const { currencyInput } = setUp();
  userEvent.type(currencyInput, '{selectall}-050e01 !@#% aoqrigfjbv.13');
  expect(currencyInput.value).toBe('$0.13');
});
