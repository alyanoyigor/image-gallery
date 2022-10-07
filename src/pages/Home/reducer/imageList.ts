import { combineReducers } from '@reduxjs/toolkit';

import imageListFetchReducer from './imageListFetch';
import imageListPaginationReducer from './imageListPagination';

const imageListReducer = combineReducers({
  imageListFetch: imageListFetchReducer,
  imageListPagination: imageListPaginationReducer,
});

export default imageListReducer;
