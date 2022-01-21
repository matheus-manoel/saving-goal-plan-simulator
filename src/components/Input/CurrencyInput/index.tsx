import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import React from 'react';
import numeral from 'numeral';

import { Label } from '../styles';
import { InnerWrapper, StyledDollarSign, StyledInput, Wrapper } from './styles';

export interface CurrencyInputProps {
  label?: string;
  onChangeValue?: (value: number) => void;
}

export default function CurrencyInput(props: CurrencyInputProps): JSX.Element {
  const { label, onChangeValue } = props;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChangeValue) {
      onChangeValue(numeral(e.target.value)?.value() || 0);
    }
  };

  return (
    <Wrapper>
      {label && <Label data-testid={'currency_input_label'}>{label}</Label>}
      <InnerWrapper>
        <StyledDollarSign />
        <MaskedInput
          mask={createNumberMask({
            prefix: '',
            suffix: '',
            includeThousandsSeparator: true,
            thousandsSeparatorSymbol: ',',
            allowDecimal: true,
            decimalSymbol: '.',
            decimalLimit: 2,
            integerLimit: 10,
            allowNegative: false,
            allowLeadingZeroes: false,
          })}
          onChange={onChange}
          type={'tel'}
          defaultValue={25000}
          name={'amount'}
          data-testid={'currency_input'}
          render={(ref, props) => {
            return (
              <StyledInput
                ref={(input: HTMLInputElement) => ref(input)}
                {...props}
              />
            );
          }}
        />
      </InnerWrapper>
    </Wrapper>
  );
}
