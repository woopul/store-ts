import React, { useEffect, useState } from 'react'
import { ProductCard } from '../ProductCard/ProductCard'
import { Product } from '../../models/Product'
import products from '../../config/api';
import styled from 'styled-components';
import { API_PRODUCT_URI } from '../../constants/api'
import { useSelector } from 'react-redux';
import { selectProductsList, selectProductsLoading } from 'store/products/selectors';

const Container = styled.div`
  flex: 0 1 1440px;
  padding: 0 108px; 
  display: grid;
  margin-top: 56px;
  grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
  grid-gap: 24px;
`

export const ProductsContent = () => {
  const productsList = useSelector(selectProductsList)
  const isLoading = useSelector(selectProductsLoading)

  return (
    <>
      <Container>
        {isLoading && `LOADING ....`}
        {productsList.length > 0 ?
          productsList.map((item: Product, i: number) => <ProductCard key={i} {...item} />) :
          `NOT FOUND`}
      </Container>
    </>
  )
}