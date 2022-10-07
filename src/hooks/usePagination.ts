import { useMemo } from 'react';
import { range } from 'utils/range';

type UsePaginationParams = {
  totalCount: number;
  itemsPerPage: number;
  currentPage: number;
  siblingCount?: number;
};

export const usePagination = ({
  totalCount,
  itemsPerPage,
  siblingCount = 1,
  currentPage,
}: UsePaginationParams) => {
  const DOTS = '...';
  // eslint-disable-next-line consistent-return
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / itemsPerPage);
    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount,
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount,
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, itemsPerPage, siblingCount, currentPage]);

  return paginationRange;
};