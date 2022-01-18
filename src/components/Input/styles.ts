/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const Label = styled.span`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: ${(props) => props.theme.fonts.weights.light};
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.colors.blueGray900};
`;
