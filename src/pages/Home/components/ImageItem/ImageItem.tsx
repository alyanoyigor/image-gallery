import { MouseEvent } from 'react';
import { useSelector } from 'react-redux';

import useAxios from 'hooks/useAxios';
import { loadImg } from 'utils/loadImg';
import DefaultImage from 'assets/default-image.jpg';
import { useAppDispatch } from 'store';
import { favoriteImagesDataSelector } from 'pages/Favorites/selectors/imageListFetch';
import { toggleFavoriteImages } from 'pages/Favorites/reducer/favoriteImages';

import {
  StyledLikeEmptyIcon,
  StyledImage,
  StyledImageItem,
  StyledImageLink,
  StyledImageSkeleton,
  StyledLikeButton,
  StyledLikeIcon,
} from './styled';

type ImageItemProps = {
  id: string;
  src: string;
  alt: string;
};

export const ImageItem = (props: ImageItemProps) => {
  const { id, src, alt } = props;
  const { data, loading, error } = useAxios(() => loadImg(src));
  const favImages = useSelector(favoriteImagesDataSelector);
  const dispatch = useAppDispatch();

  const toggleFavoriteImage = (event: MouseEvent<HTMLElement>) => {
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
            {favImages.find((favImage) => favImage.id === id) ? (
              <StyledLikeButton onClick={toggleFavoriteImage}>
                <StyledLikeIcon />
              </StyledLikeButton>
            ) : (
              <StyledLikeEmptyIcon onClick={toggleFavoriteImage} />
            )}
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
