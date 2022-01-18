/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  background: ${(props) => props.theme.colors.neutralWhite};
  display: flex;
  align-items: center;
  padding: 0 30px;
`;
