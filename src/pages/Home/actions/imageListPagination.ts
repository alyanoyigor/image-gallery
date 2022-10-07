import { PayloadAction } from '@reduxjs/toolkit';
import { ImageListPaginationState } from 'types/state';

export const imageListPaginationChangePageAction = (
  state: ImageListPaginationState,
  action: PayloadAction<{ page: number }>,
) => {
  const { page } = action.payload;

  state.currentPage = page;
};

export const imageListPaginationChangeLimitAction = (
  state: ImageListPaginationState,
  action: PayloadAction<{ limit: number }>,
) => {
  const { limit } = action.payload;

  state.limit = limit;
};
