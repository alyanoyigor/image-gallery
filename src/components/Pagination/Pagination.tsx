import { usePagination } from 'hooks/usePagination';
import { Fragment } from 'react';
import {
  StyledLeftArrow,
  StyledList,
  StyledListItem,
  StyledListItemButton,
  StyledRightArrow,
} from './styled';

type PaginationProps = {
  itemsPerPage: number;
  totalCount: number;
  currentPage: number;
  onPaginate: (index: number) => void;
};

export const Pagination = (props: PaginationProps) => {
  const { itemsPerPage, totalCount, currentPage, onPaginate } = props;
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    itemsPerPage,
  }) as (string | number)[];

  const lastPage = paginationRange[paginationRange.length - 1];

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPaginate(currentPage + 1);
  };

  const onPrevious = () => {
    onPaginate(currentPage - 1);
  };

  return (
    <nav>
      <StyledList>
        <StyledListItem>
          <StyledLeftArrow disabled={currentPage === 1} onClick={onPrevious} />
        </StyledListItem>
        {paginationRange.map((number) => (
          <Fragment key={number}>
            {number === '...' && (
              <StyledListItem>
                <StyledListItemButton>&#8230;</StyledListItemButton>
              </StyledListItem>
            )}
            {typeof number === 'number' && (
              <StyledListItem>
                <StyledListItemButton
                  className={currentPage === number ? 'active' : ''}
                  onClick={() => onPaginate(number)}
                >
                  {number}
                </StyledListItemButton>
              </StyledListItem>
            )}
          </Fragment>
        ))}
        <StyledListItem>
          <StyledRightArrow
            onClick={onNext}
            disabled={currentPage === lastPage}
          />
        </StyledListItem>
      </StyledList>
    </nav>
  );
};
