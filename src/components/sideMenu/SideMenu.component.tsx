import React from 'react';
import { useRouter } from 'next/router';
import {
  MenuContainer,
  MenuList,
  TitleMenuItem,
  ContainerMenuItem,
  StyledMenuItem,
} from './SideMenu.styles';

interface MenuItemData {
  title: string;
  path?: string;
}

const menuData: MenuItemData[] = [
  {
    title: 'Dragões',
    path: '/dragons',
  },
  {
    title: 'Cadastrar Dragão',
    path: '/dragon',
  },
];

const SideMenuComponent = () => {
  const { push, pathname } = useRouter();

  const handleMenuItem = (item: MenuItemData) => {
    push(item.path || '');
  };

  return (
    <MenuContainer>
      <MenuList>
        {menuData.map((menu) => (
          <ContainerMenuItem selected={pathname === menu.path} key={menu.title}>
            <StyledMenuItem onClick={() => handleMenuItem(menu)}>
              <TitleMenuItem selected={pathname === menu.path}>
                {menu.title}
              </TitleMenuItem>
            </StyledMenuItem>
          </ContainerMenuItem>
        ))}
      </MenuList>
    </MenuContainer>
  );
};

export default SideMenuComponent;
