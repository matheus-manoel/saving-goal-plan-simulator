/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

import { ReactComponent as DollarSign } from '../../../assets/icons/dollar-sign.svg';
import { InputStyle } from '../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  outline: none;
  border: 0;
  height: max-content;
  width: 98%;
  font-weight: ${(props) => props.theme.fonts.weights.bold};
  color: ${(props) => props.theme.colors.blueGray600};
  font-size: 24px;
  margin-left: 7px;
`;

export const InnerWrapper = styled.div`
  ${InputStyle};
  padding-left: 14px;
  display: flex;
  align-items: center;
`;

export const StyledDollarSign = styled(DollarSign)`
  width: 28px;
  height: 48px;
`;
