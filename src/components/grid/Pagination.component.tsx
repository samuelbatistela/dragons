/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, ChangeEvent } from 'react';

import {
  Footer,
  SelectPage,
  ButtonNavigation,
  WrapperCount,
  CountItemsText,
  CountItems,
  LinesPageText,
} from './Pagination.styles';

interface PaginationProps {
  data: any[];
  currentPage: number;
  itemsPerPage: number;
  handlePageChange: (page: number) => void;
  handleItemsPerPageChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Pagination: FC<PaginationProps> = ({
  data,
  currentPage,
  itemsPerPage,
  handlePageChange,
  handleItemsPerPageChange,
}) => {
  return (
    <Footer>
      <WrapperCount>
        <CountItemsText>Total de Itens:</CountItemsText>
        <CountItems>{data.length}</CountItems>
      </WrapperCount>
      <div>
        <LinesPageText>Linhas por página:</LinesPageText>
        <SelectPage value={itemsPerPage} onChange={handleItemsPerPageChange}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </SelectPage>
        <LinesPageText>
          {`${(currentPage - 1) * itemsPerPage + 1}-${Math.min(
            currentPage * itemsPerPage,
            data.length,
          )}`}
        </LinesPageText>
        <ButtonNavigation
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {'<'}
        </ButtonNavigation>
        <ButtonNavigation
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage * itemsPerPage >= data.length}
        >
          {'>'}
        </ButtonNavigation>
      </div>
    </Footer>
  );
};

export default Pagination;
