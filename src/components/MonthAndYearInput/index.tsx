import styled from 'styled-components';

interface MonthAndYearInputProps {
  title?: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const MonthAndYearInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const MonthAndYearInputTitle = styled.span``;

export default function MonthAndYearInput(
  props: MonthAndYearInputProps
): JSX.Element {
  const { title } = props;
  return (
    <MonthAndYearInputWrapper>
      {title && <MonthAndYearInputTitle>{title}</MonthAndYearInputTitle>}
      <input></input>
    </MonthAndYearInputWrapper>
  );
}
