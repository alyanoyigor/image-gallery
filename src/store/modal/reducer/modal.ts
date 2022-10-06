import { createSlice } from '@reduxjs/toolkit';
import { ModalState } from 'types/state';
import { modalOpenAction, modalCloseAction } from '../actions/modal';

const initialState: ModalState = { open: false, name: null };

const MODAL_SLICE_NAME = 'MODAL_SLICE';

const modalSlice = createSlice({
  name: MODAL_SLICE_NAME,
  initialState,
  reducers: { modalOpen: modalOpenAction, modalClose: modalCloseAction },
});

export const { modalOpen, modalClose } = modalSlice.actions;

export default modalSlice.reducer;
