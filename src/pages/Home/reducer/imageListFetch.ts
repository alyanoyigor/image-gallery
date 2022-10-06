import { createSlice } from '@reduxjs/toolkit';

import { ImageListFetchState } from 'types/state';

import * as actions from '../actions/imageListFetch';
import { imageListFetchStart } from '../thunks/imageListFetch';

const initialState: ImageListFetchState = {
  data: [],
  loading: true,
  error: null,
  currentPage: 1,
};

const IMAGE_LIST_FETCH_SLICE_NAME = 'IMAGE_LIST_FETCH_SLICE';

const imageListFetchSlice = createSlice({
  name: IMAGE_LIST_FETCH_SLICE_NAME,
  initialState,
  reducers: {
    imageListFetchChangePage: actions.imageListFetchChangePageAction,
    imageListFetchRemoveData: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        imageListFetchStart.pending.type,
        actions.imageListFetchInProgressAction,
      )
      .addCase(
        imageListFetchStart.fulfilled.type,
        actions.imageListFetchSuccessAction,
      )
      .addCase(
        imageListFetchStart.rejected.type,
        actions.imageListFetchErrorAction,
      );
  },
});

export const { imageListFetchChangePage, imageListFetchRemoveData } =
  imageListFetchSlice.actions;

export default imageListFetchSlice.reducer;
