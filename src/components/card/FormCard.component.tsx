import styled from 'styled-components';

import CardCSS from './Card.css';

const FormCard = styled.div`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
    ${CardCSS}
  }
`;

export default FormCard;
