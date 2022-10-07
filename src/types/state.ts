import { ModalName } from 'store/modal/constants/modal';
import { FavoriteImageData, ImageData } from './images';

export type ModalState = {
  open: boolean;
  name: ModalName | null;
};

export type ImageListFetchState = {
  data: ImageData[];
  loading: boolean;
  error: string | null;
};

export type ImageListPaginationState = {
  currentPage: number;
  limit: number;
};

export type ImageDetailsFetchState = {
  data: ImageData | null;
  loading: boolean;
  error: string | null;
};

export type FavoriteImagesState = {
  data: FavoriteImageData[];
};
