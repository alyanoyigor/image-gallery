import { createSlice } from '@reduxjs/toolkit';

import { FavoriteImagesState } from 'types/state';
import * as actions from '../actions/favoriteImages';

const savedFavImages = localStorage.getItem('favImages');
const parsedFavImages = savedFavImages && JSON.parse(savedFavImages);

const initialState: FavoriteImagesState = {
  data: parsedFavImages || [],
};

const FAVORITE_IMAGES_SLICE_NAME = 'FAVORITE_IMAGES_SLICE';

const favoriteImagesSlice = createSlice({
  name: FAVORITE_IMAGES_SLICE_NAME,
  initialState,
  reducers: {
    toggleFavoriteImages: actions.toggleFavoriteImagesAction,
  },
});

export const { toggleFavoriteImages } = favoriteImagesSlice.actions;

export default favoriteImagesSlice.reducer;
