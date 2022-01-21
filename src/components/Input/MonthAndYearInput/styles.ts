/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

import { InputStyle } from '../styles';

export const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InnerWrapper = styled.div`
  ${InputStyle}
  display: flex;
  justify-content: space-around;
`;

export const MonthAndYearWrapper = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled.button`
  width: 20%;
  fill: ${(props) =>
    props.disabled
      ? props.theme.colors.blueGray50
      : props.theme.colors.blueGray300};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;

export const MonthText = styled.p`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: ${(props) => props.theme.fonts.weights.bold};
  color: ${(props) => props.theme.colors.blueGray900};
  font-size: 16px;
  line-height: 24px;
`;

export const YearText = styled.p`
  text-align: center;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: ${(props) => props.theme.fonts.weights.light};
  color: ${(props) => props.theme.colors.blueGray400};
  font-size: 16px;
  line-height: 24px;
`;
