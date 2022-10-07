import { ChangeEvent, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { limitOptions } from 'data/limitOptions';
import { useAppDispatch } from 'store';
import { Preloader } from 'components/Preloader';
import { ErrorMessage } from 'components/ErrorMessage';
import { Pagination } from 'components/Pagination';

import { ImageItem } from './components/ImageItem';
import { imageListPaginationSelector } from './selectors/imageListPagination';
import { imageListFetchSelector } from './selectors/imageListFetch';
import { imageListFetchStart } from './thunks/imageListFetch';
import { imageListFetchRemoveData } from './reducer/imageListFetch';
import {
  imageListPaginationChangePage,
  imageListPaginationChangeLimit,
} from './reducer/imageListPagination';
import {
  StyledActionsContainer,
  StyledImageList,
  StyledSelect,
} from './styled';

export const Home = () => {
  const { data, error, loading } = useSelector(imageListFetchSelector);
  const { currentPage, limit } = useSelector(imageListPaginationSelector);

  const dispatch = useAppDispatch();

  const handlePaginate = useCallback(
    (page: number) => {
      dispatch(imageListPaginationChangePage({ page }));
    },
    [dispatch],
  );

  const onChangeSelectLimit = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      imageListPaginationChangeLimit({ limit: Number(event.target.value) }),
    );
  };

  useEffect(() => {
    const saveCurrentPage = () => {
      localStorage.setItem('page', currentPage.toString());
      localStorage.setItem('limit', limit.toString());
    };

    dispatch(imageListFetchStart({ page: currentPage, limit }));
    window.addEventListener('beforeunload', saveCurrentPage);

    return () => {
      window.removeEventListener('beforeunload', saveCurrentPage);
    };
  }, [dispatch, currentPage, limit]);

  useEffect(
    () => () => {
      dispatch(imageListFetchRemoveData());
    },
    [dispatch],
  );

  return (
    <>
      {!error && (
        <StyledActionsContainer>
          <Pagination
            itemsPerPage={10}
            totalCount={1000}
            currentPage={currentPage}
            onPaginate={handlePaginate}
          />
          <StyledSelect onChange={onChangeSelectLimit}>
            {limitOptions.map(({ value }) => (
              <option key={value} value={value} selected={limit === value}>
                {value}
              </option>
            ))}
          </StyledSelect>
        </StyledActionsContainer>
      )}
      <StyledImageList>
        {loading && !error && <Preloader />}
        {!error &&
          data.map((imageItem) => (
            <ImageItem
              key={imageItem.id}
              id={imageItem.id}
              src={imageItem.download_url}
              alt={imageItem.author}
            />
          ))}
        {error && !loading && <ErrorMessage>{error}</ErrorMessage>}
      </StyledImageList>
    </>
  );
};
