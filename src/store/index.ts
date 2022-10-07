import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import favoriteImagesReducer from 'pages/Favorites/reducer/favoriteImages';
import imageListReducer from 'pages/Home/reducer/imageList';
import imageDetailsFetchReducer from 'pages/ImageDetails/reducer/imageDetailsFetch';
import modalReducer from './modal/reducer/modal';

const rootReducer = combineReducers({
  modal: modalReducer,
  imageList: imageListReducer,
  imageDetailsFetch: imageDetailsFetchReducer,
  favoriteImages: favoriteImagesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type Store = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
