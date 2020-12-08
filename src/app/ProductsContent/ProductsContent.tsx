import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLimitAction } from '../../store/products/actions';
import styled from 'styled-components';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { selectProductsList, selectProductsLoading } from 'store/products/selectors';
import { ProductCard } from '../ProductCard/ProductCard';
import { Product } from '../../models/Product';
import { NotFound } from 'app/NotFound/NotFound';

const Container = styled.div`
  flex: 0 1 1440px;
  padding: 0 108px; 
  display: grid;
  place-items: center;
  margin-top: 56px;
  grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
  grid-gap: 24px;
  
  @media (max-width:1100px) {
    padding: 0 24px;
  }

  .loader {
    place-self: center;
  }
`

export const ProductsContent = () => {
  const dispatch = useDispatch();
  const productsList = useSelector(selectProductsList);
  const isLoading = useSelector(selectProductsLoading);
  const matchesPhone = useMediaQuery('(max-width:600px)');
  const matchesMedium = useMediaQuery('(max-width:1456px)');
  const matchesLarge = useMediaQuery('(max-width:1600px)');

  if (matchesPhone) {
    dispatch(setLimitAction(4))
  } else if (matchesMedium) {
    dispatch(setLimitAction(6))
  } else if (matchesLarge) {
    dispatch(setLimitAction(8))
  } else {
    dispatch(setLimitAction(10))
  }

  return (
    <>
      <Container>
        {isLoading && <div className="loader">Loading Products...</div>}
        {productsList.length > 0 ?
          productsList.map((item: Product, i: number) => <ProductCard key={i} {...item} />) :
          !isLoading && <NotFound />
        }
      </Container>
    </>
  )
}