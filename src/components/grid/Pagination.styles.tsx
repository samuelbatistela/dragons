import { BasetypographyCSS } from '@/components/typography/Typography.component';
import SharedButton from '@/components/button/Button.component';
import styled from 'styled-components';

export const Footer = styled.div`
  flex-shrink: 0;
  height: auto;
  padding: 8px;
  background-color: ${({ theme }) => theme.background.color.primary};
  border-top: 1px solid ${({ theme }) => theme.background.color.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SelectPage = styled.select`
  ${BasetypographyCSS}
  line-height: 12px;
  margin: 0px 8px;
  background: ${({ theme }) =>
    theme.theme === 'light' ? theme.color.white : theme.color.black};
`;

export const ButtonIcon = styled(SharedButton)`
  width: 130px;
  font-size: ${({ theme }) => theme.font.size.small}px;
`;

export const ButtonNavigation = styled(ButtonIcon)`
  ${BasetypographyCSS}
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.size.xbig}px;
  line-height: 24px;
  width: 24px;
  height: 24px;
  margin: 0px 4px;
`;

export const WrapperCount = styled.div``;

export const Text = styled.label`
  ${BasetypographyCSS}
  font-size: ${({ theme }) => theme.font.size.small}px;
  line-height: 18px;
  color: ${({ theme }) => theme.font.color.primary};
`;

export const CountItemsText = styled(Text)`
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.font.color.primary};
`;

export const CountItems = styled(CountItemsText)`
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.font.color.primary};
  margin-left: 8px;
`;

export const LinesPageText = styled(CountItemsText)`
  font-weight: ${({ theme }) => theme.font.weight.regular};
  line-height: 16.34px;
`;
