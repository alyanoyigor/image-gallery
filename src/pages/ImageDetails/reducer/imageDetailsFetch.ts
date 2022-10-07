import { createSlice } from '@reduxjs/toolkit';

import { ImageDetailsFetchState } from 'types/state';

import * as actions from '../actions/imageDetailsFetch';
import { imageDetailsFetchStart } from '../thunks/imageDetailsFetch';

const initialState: ImageDetailsFetchState = {
  data: null,
  loading: true,
  error: null,
};

const IMAGE_DETAILS_FETCH_SLICE_NAME = 'IMAGE_DETAILS_FETCH_SLICE';

const imageDetailsFetchSlice = createSlice({
  name: IMAGE_DETAILS_FETCH_SLICE_NAME,
  initialState,
  reducers: {
    imageDetailsFetchRemoveData: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        imageDetailsFetchStart.pending.type,
        actions.imageDetailsFetchInProgressAction,
      )
      .addCase(
        imageDetailsFetchStart.fulfilled.type,
        actions.imageDetailsFetchSuccessAction,
      )
      .addCase(
        imageDetailsFetchStart.rejected.type,
        actions.imageDetailsFetchErrorAction,
      );
  },
});

export const { imageDetailsFetchRemoveData } = imageDetailsFetchSlice.actions;

export default imageDetailsFetchSlice.reducer;
