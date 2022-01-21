/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const Paper = styled.div`
  width: 460px;
  background: ${(props) => props.theme.colors.neutralWhite};
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
  padding: 40px;
  @media (max-width: 480px) {
    padding: 24px 24px;
    width: fit-content;
  }
`;

export const Header = styled.div`
  display: flex;
`;

export const HeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin-top: 5px;
`;

export const HeaderTitle = styled.h2`
  font-weight: ${(props) => props.theme.fonts.weights.normal};
  font-size: 24px;
  line-height: 28.8px;
`;

export const HeaderSubtitle = styled.p`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: ${(props) => props.theme.fonts.weights.light};
  color: ${(props) => props.theme.colors.blueGray400};
  font-size: 16px;
  line-height: 24px;
`;

export const InputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  gap: 16px;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  background: ${(props) => props.theme.colors.neutralWhite};
  border: 1px solid ${(props) => props.theme.colors.blueGray50};
  border-radius: 4px;
`;

export const ResultsMainRow = styled.div`
  display: flex;
  height: 78px;
  justify-content: space-between;
  align-items: center;
  margin-left: 32px;
  margin-right: 32px;
`;

export const ResultsLabel = styled.p`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: ${(props) => props.theme.fonts.weights.light};
  font-size: 20px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.blueGray900};
`;

export const MonthlyAmountText = styled.p`
  font-weight: ${(props) => props.theme.fonts.weights.normal};
  color: ${(props) => props.theme.colors.brandColorSecondary};
  font-size: 32px;
  line-height: 38.4px;
`;

export const ResultsMonthlyDepositsInfo = styled.p`
  background: ${(props) => props.theme.colors.background};
  height: 32px;
  padding: 24px 32px;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: ${(props) => props.theme.fonts.weights.light};
  font-size: 12px;
  line-height: 16px;
`;

export const Bold = styled.span`
  font-weight: ${(props) => props.theme.fonts.weights.bold};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ConfirmButton = styled.button`
  width: 320px;
  height: 56px;
  background: ${(props) => props.theme.colors.brandColorPrimary};
  border-radius: 32px;
  color: ${(props) => props.theme.colors.neutralWhite};
  margin-top: 24px;
`;

export const CurrencyInputWrapper = styled.div`
  width: 272px;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const MonthAndYearInputWrapper = styled.div`
  width: 192px;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
