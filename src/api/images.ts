import { ImageData } from 'types/images';
import client from './client';

type GetImagesParams = {
  page: number;
  limit: number;
};

export const getImages = async ({ page, limit }: GetImagesParams) => {
  try {
    return await client.get<never, ImageData[]>(
      `/v2/list?page=${page}&limit=${limit}`,
    );
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getImage = async (id: string) => {
  try {
    return await client.get<never, ImageData>(`/id/${id}/info`);
  } catch (error) {
    return Promise.reject(error);
  }
};
