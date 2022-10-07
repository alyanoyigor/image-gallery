import { useSelector } from 'react-redux';
import { ImageItem } from './components/ImageItem';
import { favoriteImagesDataSelector } from './selectors/imageListFetch';
import { StyledImageList } from './styled';

export const Favorites = () => {
  const images = useSelector(favoriteImagesDataSelector);

  return (
    <>
      {images.length !== 0 && (
        <StyledImageList>
          {images.map((image) => (
            <ImageItem
              key={image.id}
              id={image.id}
              src={image.url}
              alt={image.author}
            />
          ))}
        </StyledImageList>
      )}
      {images.length === 0 && <h1>Favorite images not found</h1>}
    </>
  );
};
