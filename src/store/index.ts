import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import imageListFetchReducer from 'pages/Home/reducer/imageListFetch';
import modalReducer from './modal/reducer/modal';

const rootReducer = combineReducers({
  modal: modalReducer,
  imageListFetch: imageListFetchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type Store = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
