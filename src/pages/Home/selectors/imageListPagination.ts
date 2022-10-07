import { createSelector } from 'reselect';
import { RootState } from 'store';

const imageListPaginationStateSelector = (state: RootState) =>
  state.imageList.imageListPagination;

export const imageListPaginationSelector = createSelector(
  imageListPaginationStateSelector,
  (data) => data,
);
