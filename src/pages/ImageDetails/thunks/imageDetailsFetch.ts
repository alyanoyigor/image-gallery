import { createAsyncThunk } from '@reduxjs/toolkit';
import { getImage } from 'api/images';
import { ImageData } from 'types/images';

const IMAGE_DETAILS_FETCH_START_TYPE = 'IMAGE_DETAILS_FETCH_START';

export const imageDetailsFetchStart = createAsyncThunk<
  { image: ImageData },
  { id: string }
>(IMAGE_DETAILS_FETCH_START_TYPE, async (data, { rejectWithValue }) => {
  try {
    const { id } = data;
    const image = await getImage(id);
    return { image };
  } catch (error) {
    return rejectWithValue({ error });
  }
});
