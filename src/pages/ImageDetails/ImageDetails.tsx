import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useAppDispatch } from 'store';
import { ErrorMessage } from 'components/ErrorMessage';
import { Preloader } from 'components/Preloader';

import { imageDetailsFetchRemoveData } from './reducer/imageDetailsFetch';
import { imageDetailsFetchSelector } from './selectors/imageDetailsFetch';
import { imageDetailsFetchStart } from './thunks/imageDetailsFetch';
import { StyledImage, StyledImageWrapper } from './styled';

export const ImageDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data, error, loading } = useSelector(imageDetailsFetchSelector);

  useEffect(() => {
    if (id) {
      dispatch(imageDetailsFetchStart({ id }));
    }
    return () => {
      dispatch(imageDetailsFetchRemoveData());
    };
  }, [dispatch, id]);

  return (
    <>
      {loading && !error && <Preloader />}
      {data && !error && (
        <StyledImageWrapper>
          <StyledImage src={data.download_url} alt={data.author} />
        </StyledImageWrapper>
      )}
      {error && !loading && <ErrorMessage>{error}</ErrorMessage>}
      {}
    </>
  );
};
