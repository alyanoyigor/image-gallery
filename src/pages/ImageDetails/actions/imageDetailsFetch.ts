import { PayloadAction } from '@reduxjs/toolkit';
import { ImageData } from 'types/images';
import { ImageDetailsFetchState } from 'types/state';

export const imageDetailsFetchInProgressAction = (
  state: ImageDetailsFetchState,
) => {
  state.loading = true;
  state.error = null;
};

export const imageDetailsFetchSuccessAction = (
  state: ImageDetailsFetchState,
  action: PayloadAction<{ image: ImageData }>,
) => {
  const { image } = action.payload;

  state.data = image;
  state.loading = false;
};

export const imageDetailsFetchErrorAction = (
  state: ImageDetailsFetchState,
  action: PayloadAction<{ error: string }>,
) => {
  const { error } = action.payload;

  state.error = error;
  state.loading = false;
};
