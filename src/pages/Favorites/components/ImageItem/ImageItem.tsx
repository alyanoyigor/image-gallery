import { MouseEvent } from 'react';

import useAxios from 'hooks/useAxios';
import { loadImg } from 'utils/loadImg';
import DefaultImage from 'assets/default-image.jpg';
import { useAppDispatch } from 'store';
import { toggleFavoriteImages } from 'pages/Favorites/reducer/favoriteImages';

import {
  StyledImage,
  StyledImageItem,
  StyledImageLink,
  StyledImageSkeleton,
  StyledRemoveIcon,
} from './styled';

type ImageItemProps = {
  id: string;
  src: string;
  alt: string;
};

export const ImageItem = (props: ImageItemProps) => {
  const { id, src, alt } = props;
  const { data, loading, error } = useAxios(() => loadImg(src));
  const dispatch = useAppDispatch();

  const removeFavoriteImage = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(toggleFavoriteImages({ image: { id, url: src, author: alt } }));
  };

  return (
    <>
      {loading && !error && <StyledImageSkeleton />}
      {data && !loading && !error && (
        <StyledImageItem>
          <StyledImageLink to={`/image/${id}`}>
            <button type="button" onClick={removeFavoriteImage}>
              <StyledRemoveIcon />
            </button>
            <StyledImage src={src} alt={alt} />
          </StyledImageLink>
        </StyledImageItem>
      )}
      {!loading && error && (
        <StyledImage src={DefaultImage} alt="Image not found" />
      )}
    </>
  );
};
