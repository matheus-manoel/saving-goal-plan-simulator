/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

export const Container = styled.div`
  width: available;
  height: 32px;
  background: ${(props) => props.theme.colors.neutralWhite};
  display: flex;
  align-items: center;
  padding: 24px 56px;
  @media (max-width: 480px) {
    height: 24px;
    padding: 16px 16px;
  }
`;

export const StyledLogo = styled(Logo)`
  @media (max-width: 480px) {
    height: 24px;
    width: 75px;
  }
`;
