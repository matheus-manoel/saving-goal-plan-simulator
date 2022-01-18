import MonthAndYearInput, { MonthAndYearInputProps } from './MonthAndYearInput';
import CurrencyInput, { CurrencyInputProps } from './CurrencyInput';

interface InputOwnProps {
  type: 'currency' | 'monthAndYear';
}

export default function Input(
  props: InputOwnProps & MonthAndYearInputProps & CurrencyInputProps
): JSX.Element {
  const { type, label, onChangeDate, onChangeValue } = props;
  const shouldRenderCurrencyInput = type === 'currency';

  if (shouldRenderCurrencyInput) {
    return <CurrencyInput label={label} onChangeValue={onChangeValue} />;
  } else {
    return <MonthAndYearInput label={label} onChangeDate={onChangeDate} />;
  }
}
