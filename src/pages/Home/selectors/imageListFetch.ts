import { createSelector } from 'reselect';
import { RootState } from 'store';

const imageListFetchStateSelector = (state: RootState) => state.imageListFetch;

export const imageListFetchSelector = createSelector(
  imageListFetchStateSelector,
  (data) => data,
);
