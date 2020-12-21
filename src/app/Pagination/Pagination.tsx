import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPagination from '@material-ui/lab/Pagination';
import styled from 'styled-components';
import { setPageNumberAction } from '../../store/products/actions';
import { selectProductsPage, selectProductsTotalPages } from '../../store/products/selectors';
import { selectProductsList, selectProductsLoading } from 'store/products/selectors';

const Container = styled.div<{ currentPage: number }>`
  margin: 40px 0;
  display: flex;
  justify-content: center;
  font-size: 20px;
  @media (max-width: 1100px){
    padding: 0 24px;
  }
`

export const Pagination = () => {
  const productsList = useSelector(selectProductsList);
  const isLoading = useSelector(selectProductsLoading);
  const dispatch = useDispatch();
  const totalPages: number = useSelector(selectProductsTotalPages)!;
  const currentPage: number = useSelector(selectProductsPage);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPageNumberAction(value));
  }

  const renderPagination = () => {
    return <ReactPagination
      page={currentPage}
      count={totalPages}
      hidePrevButton
      hideNextButton
      onChange={handlePageChange}
      siblingCount={1}
      boundaryCount={2}
      showFirstButton
      showLastButton />
  }

  return (
    <>
      {!isLoading && productsList.length > 0 &&
        <Container currentPage={currentPage}>
          {renderPagination()}
        </Container>
      }
    </>
  )
}

