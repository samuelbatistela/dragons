import React, { ChangeEvent, useMemo, useState } from 'react';
import {
  Container,
  GridContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  Actions,
  ButtonIcon,
} from './Grid.styles';
import Pagination from './Pagination.component';
import EditIcon from '../icons/EditIcon.component';
import DeleteIcon from '../icons/DeleteIcon.component';

interface GridProps<T = Record<string, unknown>> {
  headers: string[];
  data: T[];
  keys: string[];
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Grid = <T extends Record<string, any>>({
  headers,
  data,
  keys,
  onEdit,
  onDelete,
}: GridProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const columns =
    keys ?? (data.length > 0 ? (Object.keys(data[0]) as (keyof T)[]) : []);

  const currentData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  }, [data, currentPage, itemsPerPage]);

  const handlePageChange = (page: number) => setCurrentPage(page);

  const handleItemsPerPageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = Number(event.target.value);
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  return (
    <Container>
      <GridContainer>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <TableHeader key={index} scope="col">
                  {header}
                </TableHeader>
              ))}
              {(onEdit || onDelete) && <TableHeader>Ações</TableHeader>}
            </TableRow>
          </TableHead>
          <tbody>
            {currentData.map((item, rowIdx) => (
              <TableRow key={rowIdx}>
                {columns.map((key, colIdx) => (
                  <TableCell key={colIdx}>{item[key]}</TableCell>
                ))}

                {(onEdit || onDelete) && (
                  <TableCell>
                    <Actions>
                      {onEdit && (
                        <ButtonIcon
                          onClick={() => onEdit(item)}
                          aria-label="Editar"
                        >
                          <EditIcon />
                        </ButtonIcon>
                      )}
                      {onDelete && (
                        <ButtonIcon
                          onClick={() => onDelete(item)}
                          aria-label="Excluir"
                        >
                          <DeleteIcon />
                        </ButtonIcon>
                      )}
                    </Actions>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </tbody>
        </Table>
      </GridContainer>

      <Pagination
        data={data}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        handleItemsPerPageChange={handleItemsPerPageChange}
      />
    </Container>
  );
};

export default Grid;
