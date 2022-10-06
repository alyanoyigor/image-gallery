import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'store';
import { Preloader } from 'components/Preloader';
import { ErrorMessage } from 'components/ErrorMessage';
import { Pagination } from 'components/Pagination';

import { imageListFetchSelector } from './selectors/imageListFetch';
import { imageListFetchStart } from './thunks/imageListFetch';
import {
  imageListFetchChangePage,
  imageListFetchRemoveData,
} from './reducer/imageListFetch';
import { Image } from './components/Image';
import { StyledImageItem, StyledImageList } from './styled';

export const Home = () => {
  const { data, error, loading, currentPage } = useSelector(
    imageListFetchSelector,
  );
  const dispatch = useAppDispatch();

  const handlePaginate = useCallback(
    (page: number) => {
      dispatch(imageListFetchChangePage({ page }));
      dispatch(imageListFetchStart({ page, limit: 10 }));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(imageListFetchStart({ page: 1, limit: 10 }));
    return () => {
      dispatch(imageListFetchRemoveData());
    };
  }, [dispatch]);

  return (
    <>
      <StyledImageList>
        {loading && !error && <Preloader />}
        {!error &&
          data.map((imageItem) => (
            <StyledImageItem key={imageItem.id}>
              <Image src={imageItem.download_url} alt={imageItem.author} />
            </StyledImageItem>
          ))}
        {error && !loading && <ErrorMessage>{error}</ErrorMessage>}
      </StyledImageList>
      <Pagination
        itemsPerPage={10}
        totalCount={1000}
        currentPage={currentPage}
        onPaginate={handlePaginate}
      />
    </>
  );
};
