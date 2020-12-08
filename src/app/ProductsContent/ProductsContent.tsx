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
  display: grid;
  place-items: center;
  max-width: 1440px;
  margin: 56px auto 0 auto;
  padding: 0 108px; 
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

  if (matchesPhone) {
    dispatch(setLimitAction(4))
  } else if (matchesMedium) {
    dispatch(setLimitAction(6))
  } else {
    dispatch(setLimitAction(8))
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