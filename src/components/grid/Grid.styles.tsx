import { BasetypographyCSS } from '@/components/typography/Typography.component';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 240px);
  overflow: hidden;
`;

export const GridContainer = styled.div`
  overflow-y: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: ${({ theme }) => theme.background.color.primary};
`;

export const TableRow = styled.tr`
  ${BasetypographyCSS}
  font-size: ${({ theme }) => theme.font.size.small}px;
  line-height: 16.34px;
  &:last-child {
    border-bottom: none;
  }
`;

export const TableHeader = styled.th`
  padding: 8px 16px;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  border: 1px solid ${({ theme }) => theme.color.backgroundLighter};
  text-align: left;
`;

export const TableCell = styled.td`
  font-weight: ${({ theme }) => theme.font.weight.regular};
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.background.color.primary};
  border: 1px solid ${({ theme }) => theme.color.backgroundLighter};
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ButtonIcon = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
