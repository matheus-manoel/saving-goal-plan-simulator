/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const SavingGoalPageBody = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeadlineWrapper = styled.div`
  justify-self: flex-start;
  margin-bottom: 20px;
`;

export const Headline = styled.p`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: ${(props) => props.theme.fonts.weights.light};
  color: ${(props) => props.theme.colors.brandColorPrimary};
  font-size: 20px;
  line-height: 24px;
`;

export const Bold = styled.span`
  font-weight: ${(props) => props.theme.fonts.weights.bold};
`;
