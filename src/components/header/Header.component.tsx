/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useState } from 'react';
import useTheme from '@/io/redux/theme/useTheme.hook';
import Flexbox from '@/shared-styles/Flexbox.css';
import ThemeIcon from '../icons/ThemeIcon.component';
import SharedContainer from '../layout/Container.component';
import Button from '../button/Button.component';
import SideMenuComponent from '../sideMenu/SideMenu.component';
import useUser from '@/io/redux/user/useUser.hook';
import { useRouter } from 'next/router';
import { Title as SharedTitle } from '../typography/Typography.component';
import MenuIcon from '../icons/MenuIcon.component';
import styled from 'styled-components';

const Wrapper = styled.header`
  background-color: transparent;
`;

const Container = styled(SharedContainer)`
  ${Flexbox}
  justify-content: left;
  position: relative;
  box-shadow: 0 1px 4px ${({ theme }) => theme.color.primary};
`;

const ButtonsWrapper = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  top: 0;
  right: 24px;
  bottom: 0;
  margin-top: ${({ menuActive }) => (!menuActive ? '30px' : '0px')};
`;

const ThemeButton = styled.button`
  display: inline-block;
  height: 18px;
  background-color: transparent;
  border: none;
  outline: 0;
  padding: 0;
  margin: 0 0 0 10px;

  cursor: pointer;
`;

const AuthButton = styled(Button)`
  font-size: 12px;
  margin-right: 2px;
  line-height: 20px;
`;

const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  width: 220px;
`;

const Separator = styled.div`
  height: 32px;
  border-right: 1px solid ${({ theme }) => theme.color.primary};
  margin-left: 32px;
  align-self: center;
`;

const ExpandButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 20px;
`;

const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 8px;
`;

const Title = styled(SharedTitle)`
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.font.size.medium}px;
  line-height: 15px;
  color: ${({ theme }) => theme.color.primary};
`;

const Subtitle = styled(Title)`
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.small}px;
  line-height: 15px;
`;

interface HeaderProps {
  toggleSideMenu: (value: boolean) => void;
  menuActive: boolean;
}

const Header: FC<HeaderProps> = ({ toggleSideMenu, menuActive }) => {
  const { toggleTheme } = useTheme();
  const { isAuthenticated, unauthenticate } = useUser();
  const { push } = useRouter();
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const handleMenuToggle = () => {
    toggleSideMenu(!menuVisible);
    setMenuVisible(!menuVisible);
  };

  const handleLogout = () => {
    unauthenticate();
    push('/');
  };

  return (
    <Wrapper>
      <Container>
        {menuActive && (
          <HeaderMenu>
            <ExpandButton onClick={handleMenuToggle}>
              <MenuIcon />
            </ExpandButton>
            <WrapperTitle>
              <Subtitle>Visitantes</Subtitle>
              <Title>Stark Towers</Title>
            </WrapperTitle>
            <Separator />
          </HeaderMenu>
        )}

        <ButtonsWrapper menuActive={menuActive}>
          {isAuthenticated() && (
            <AuthButton onClick={handleLogout}>Sair</AuthButton>
          )}
          <ThemeButton onClick={toggleTheme}>
            <ThemeIcon />
          </ThemeButton>
        </ButtonsWrapper>
      </Container>
      {menuVisible && <SideMenuComponent />}
    </Wrapper>
  );
};

export default Header;
