import { PayloadAction } from '@reduxjs/toolkit';
import { FavoriteImageData } from 'types/images';
import { FavoriteImagesState } from 'types/state';

export const toggleFavoriteImagesAction = (
  state: FavoriteImagesState,
  action: PayloadAction<{ image: FavoriteImageData }>,
) => {
  const { image } = action.payload;
  const existingFavImageIndex = state.data.findIndex(
    (favImageItem) => favImageItem.id === image.id,
  );

  if (existingFavImageIndex === -1) {
    state.data = [...state.data, image];
  } else {
    state.data.splice(existingFavImageIndex, 1);
  }

  localStorage.setItem('favImages', JSON.stringify(state.data));
};
