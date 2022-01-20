/* eslint-disable @typescript-eslint/naming-convention */
import styled, { css } from 'styled-components';

export const Label = styled.span`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: ${(props) => props.theme.fonts.weights.light};
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.colors.blueGray900};
`;

export const InputStyle = css`
  background: ${(props) => props.theme.colors.neutralWhite};
  border: 1px solid ${(props) => props.theme.colors.blueGray50};
  border-radius: 4px;
  height: 56px;
`;

export const MonthAndYearInputWrapper = styled.div`
  ${InputStyle}
`;
