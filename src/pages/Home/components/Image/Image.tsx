import useAxios from 'hooks/useAxios';
import { loadImg } from 'utils/loadImg';
import DefaultImage from 'assets/default-image.jpg';
import { StyledImage, StyledImageSkeleton } from './styled';

type ImageProps = {
  src: string;
  alt: string;
};

export const Image = (props: ImageProps) => {
  const { src, alt } = props;
  const { data, loading, error } = useAxios(() => loadImg(src));

  return (
    <>
      {loading && !error && <StyledImageSkeleton />}
      {data && !loading && !error && <StyledImage src={src} alt={alt} />}
      {!loading && error && (
        <StyledImage src={DefaultImage} alt="Image not found" />
      )}
    </>
  );
};
