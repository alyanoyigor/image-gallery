import { createSelector } from 'reselect';
import { RootState } from 'store';

const favoriteImagesStateSelector = (state: RootState) => state.favoriteImages;

export const favoriteImagesDataSelector = createSelector(
  favoriteImagesStateSelector,
  (state) => state.data,
);
