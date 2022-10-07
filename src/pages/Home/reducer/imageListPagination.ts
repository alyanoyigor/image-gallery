import { createSlice } from '@reduxjs/toolkit';

import { ImageListPaginationState } from 'types/state';
import * as actions from '../actions/imageListPagination';

const savedPage = localStorage.getItem('page');
const savedLimit = localStorage.getItem('limit');

const initialState: ImageListPaginationState = {
  currentPage: Number(savedPage) || 1,
  limit: Number(savedLimit) || 10,
};

const IMAGE_LIST_PAGINATION_SLICE_NAME = 'IMAGE_LIST_PAGINATION_SLICE';

const imageListPaginationSlice = createSlice({
  name: IMAGE_LIST_PAGINATION_SLICE_NAME,
  initialState,
  reducers: {
    imageListPaginationChangePage: actions.imageListPaginationChangePageAction,
    imageListPaginationChangeLimit:
      actions.imageListPaginationChangeLimitAction,
  },
});

export const { imageListPaginationChangePage, imageListPaginationChangeLimit } =
  imageListPaginationSlice.actions;

export default imageListPaginationSlice.reducer;
