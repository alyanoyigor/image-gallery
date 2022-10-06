import { PayloadAction } from '@reduxjs/toolkit';
import { ImageData } from 'types/images';
import { ImageListFetchState } from 'types/state';

export const imageListFetchInProgressAction = (state: ImageListFetchState) => {
  state.loading = true;
  state.error = null;
};

export const imageListFetchSuccessAction = (
  state: ImageListFetchState,
  action: PayloadAction<{ images: ImageData[] }>,
) => {
  const { images } = action.payload;

  state.data = images;
  state.loading = false;
};

export const imageListFetchErrorAction = (
  state: ImageListFetchState,
  action: PayloadAction<{ error: string }>,
) => {
  const { error } = action.payload;

  state.error = error;
  state.loading = false;
};

export const imageListFetchChangePageAction = (
  state: ImageListFetchState,
  action: PayloadAction<{ page: number }>,
) => {
  const { page } = action.payload;

  state.currentPage = page;
};
