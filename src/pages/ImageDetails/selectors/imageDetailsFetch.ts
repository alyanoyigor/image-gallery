import { createSelector } from 'reselect';
import { RootState } from 'store';

const imageDetailsFetchStateSelector = (state: RootState) =>
  state.imageDetailsFetch;

export const imageDetailsFetchSelector = createSelector(
  imageDetailsFetchStateSelector,
  (data) => data,
);
