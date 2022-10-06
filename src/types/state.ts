import { ModalName } from 'store/modal/constants/modal';
import { ImageData } from './images';

export type ModalState = {
  open: boolean;
  name: ModalName | null;
};

export type ImageListFetchState = {
  data: ImageData[];
  loading: boolean;
  error: string | null;
  currentPage: number;
};
