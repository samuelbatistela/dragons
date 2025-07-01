/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';

const Container = styled.div<any>`
  padding: 0 20px;
  margin: ${({ sideMenu }) => (sideMenu ? '0 0 0 240px' : '0 auto')};
  width: 100%;
`;

export default Container;
