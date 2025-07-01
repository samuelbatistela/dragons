import styled, { css } from 'styled-components';

type BasetypographyCSSProps = {
  color?: 'primary' | 'secondary';
};

export const BasetypographyCSS = css<BasetypographyCSSProps>`
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme, color }) =>
    color ? theme.font.color[color] : theme.font.color.primary};
`;

export const Title = styled.h2`
  ${BasetypographyCSS}
  font-size: 32px;
  line-height: 42px;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`;

export const Paragraph = styled.p`
  ${BasetypographyCSS}
  font-size: 14px;
  line-height: 20px;
`;

export const Label = styled.label`
  ${BasetypographyCSS}
  font-size: ${({ theme }) => theme.font.size.medium};
  line-height: 19px;
  font-weight: ${({ theme }) => theme.font.weight.regular};
`;
