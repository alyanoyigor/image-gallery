import { createAsyncThunk } from '@reduxjs/toolkit';
import { getImages } from 'api/images';
import { ImageData } from 'types/images';

const IMAGE_LIST_FETCH_START_TYPE = 'IMAGE_LIST_FETCH_START';

export const imageListFetchStart = createAsyncThunk<
  { images: ImageData[] },
  { page: number; limit: number }
>(IMAGE_LIST_FETCH_START_TYPE, async (options, { rejectWithValue }) => {
  try {
    const images = await getImages(options);
    return { images };
  } catch (error) {
    return rejectWithValue({ error });
  }
});
