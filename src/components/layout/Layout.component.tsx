/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useState } from 'react';
import useTheme from '@/io/redux/theme/useTheme.hook';
import { darkTheme, lightTheme } from '@/themes';
import GlobalStyle from '@/shared-styles/GlobalStyle';
import Flexbox from '@/shared-styles/Flexbox.css';
import Header from '../header/Header.component';
import Container from './Container.component';
import styled, { ThemeProvider } from 'styled-components';

const Wrapper = styled.div`
  background-color: transparent;
`;

const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`;

const Content = styled.div`
  padding-top: 70px;
  padding-bottom: 30px;

  min-height: 100vh;
  ${Flexbox}
`;

interface LayoutProps {
  children: any;
  menuActive?: boolean;
}

const Layout: FC<LayoutProps> = ({ children, menuActive }) => {
  const { theme } = useTheme();
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />

      <Wrapper>
        <HeaderWrapper>
          <Header
            menuActive={menuActive || false}
            toggleSideMenu={(value: boolean) => setOpenSideMenu(value)}
          />
        </HeaderWrapper>

        <Content>
          <Container sideMenu={openSideMenu}>{children}</Container>
        </Content>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Layout;
