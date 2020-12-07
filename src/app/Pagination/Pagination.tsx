import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import ReactPagination from '@material-ui/lab/Pagination';
import styled from 'styled-components';
import { setPageNumberAction } from '../../store/products/actions';
import { selectProductsPage, selectProductsTotalPages } from '../../store/products/selectors';
import ReactPaginate from 'react-paginate';
import { selectProductsList, selectProductsLoading } from 'store/products/selectors';
import theme from '../../theme/theme'

const Container = styled.div<{ currentPage: number }>`
  margin: 40px 0;
  display: flex;
  justify-content: center;
  font-size: 20px;
`

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(2),
        fontSize: '16px',
      },
    },
  }),
);

export const Pagination = () => {
  const productsList = useSelector(selectProductsList);
  const isLoading = useSelector(selectProductsLoading);
  const classes = useStyles();
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
          {isLoading}
          {renderPagination()}
        </Container>
      }
    </>
  )
}

