import { css } from 'styled-components';

const CardCSS = css`
  font-size: 14px;
  line-height: 20px;
  background-color: ${({ theme }) =>
    theme.theme === 'light'
      ? theme.components.card.backgroundColorSecondary
      : theme.components.card.backgroundColorPrimary};
  padding: 40px;

  border: solid 1px ${({ theme }) => theme.border.color};
  border-radius: ${({ theme }) => theme.border.radius};
`;

export default CardCSS;
