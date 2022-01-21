/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

import { InputStyle } from '../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  outline: none;
  ${InputStyle};
  font-weight: ${(props) => props.theme.fonts.weights.bold};
  color: ${(props) => props.theme.colors.blueGray600};
  font-size: 24px;
  padding-left: 20px;
`;
