import styled from 'styled-components';

interface CurrencyInputProps {
  title?: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const CurrencyInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const CurrencyInputTitle = styled.span``;

export default function CurrencyInput(props: CurrencyInputProps): JSX.Element {
  const { title } = props;
  return (
    <CurrencyInputWrapper>
      {title && <CurrencyInputTitle>{title}</CurrencyInputTitle>}
      <input></input>
    </CurrencyInputWrapper>
  );
}
