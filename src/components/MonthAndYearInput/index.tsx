import styled from 'styled-components';

interface MonthAndYearInputProps {
  label?: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const MonthAndYearInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const MonthAndYearInputTitle = styled.label``;

export default function MonthAndYearInput(
  props: MonthAndYearInputProps
): JSX.Element {
  const { label } = props;
  return (
    <MonthAndYearInputWrapper>
      {label && <MonthAndYearInputTitle>{label}</MonthAndYearInputTitle>}
      <input></input>
    </MonthAndYearInputWrapper>
  );
}
