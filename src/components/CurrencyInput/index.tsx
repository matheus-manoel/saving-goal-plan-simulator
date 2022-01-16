import styled from 'styled-components';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import React from 'react';
import numeral from 'numeral';

interface CurrencyInputProps {
  label?: string;
  onChangeValue?: (value: number) => void;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const CurrencyInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const CurrencyInputTitle = styled.label``;

export default function CurrencyInput(props: CurrencyInputProps): JSX.Element {
  const { label, onChangeValue } = props;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChangeValue) {
      onChangeValue(numeral(e.target.value)?.value() || 0);
    }
  };

  return (
    <CurrencyInputWrapper>
      {label && <CurrencyInputTitle>{label}</CurrencyInputTitle>}
      <MaskedInput
        mask={createNumberMask({
          prefix: '$',
          suffix: '',
          includeThousandsSeparator: true,
          thousandsSeparatorSymbol: ',',
          allowDecimal: true,
          decimalSymbol: '.',
          decimalLimit: 2,
          integerLimit: 7,
          allowNegative: false,
          allowLeadingZeroes: false,
        })}
        onChange={onChange}
        type={'numerical'}
        defaultValue={25000}
        name={'amount'}
      />
    </CurrencyInputWrapper>
  );
}
