import { PayloadAction } from '@reduxjs/toolkit';
import { ModalState } from 'types/state';
import { ModalName } from '../constants/modal';

export const modalOpenAction = (
  state: ModalState,
  action: PayloadAction<{ name: ModalName }>,
) => {
  const { name } = action.payload;

  state.open = true;
  state.name = name;
};

export const modalCloseAction = (state: ModalState) => {
  state.open = false;
  state.name = null;
};
