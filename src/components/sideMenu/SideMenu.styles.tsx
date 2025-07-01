import styled from 'styled-components';
import { Title as SharedTitle } from '@/components/typography/Typography.component';

interface MenuItemProps {
  selected?: boolean;
}

export const MenuContainer = styled.nav`
  position: absolute;
  top: 54px;
  left: 0;
  width: 224px;
  height: calc(100vh - 54px);
  background-color: ${({ theme }) =>
    theme.components.card.backgroundColorPrimary};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  z-index: 999;
`;

export const MenuList = styled.ul`
  padding: 0;
  margin: 0;
`;

export const TitleMenuItem = styled(SharedTitle)<MenuItemProps>`
  margin: 0;
  padding: 0;
  font-weight: ${({ selected, theme }) =>
    selected ? theme.font.weight.semiBold : theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.small}px;
  line-height: 18px;
  color: ${({ theme }) => theme.font.color.primary};
`;

export const ContainerMenuItem = styled.li<MenuItemProps>`
  background-color: ${({ selected }) => selected && 'transparent'};
  list-style-type: none;
  padding: 0;
  margin: 0;
  border-bottom: solid 1px ${({ theme }) => theme.color.backgroundLighter};
`;

export const StyledMenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) =>
      theme.theme === 'light'
        ? theme.color.backgroundLighter
        : theme.font.color.secondary};
  }
`;
