import React, { useEffect, useState } from 'react'
import ProductCard, {ProductCardProps}  from '../ProductCard/ProductCard'
import products from '../../config/api';
import styled from 'styled-components';
import { API_PRODUCT_URI } from '../../constants/api'

const Container = styled.div`
  flex: 0 1 1440px;
  padding: 0 108px; 
  display: grid;
  margin-top: 56px;
  grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
  grid-gap: 24px;
`

const ProductsContent = () => {
  const [cards, setCards] = useState<ProductCardProps[]>([])

  useEffect(() => {
    const renderProducts = async () => {
      const response = await products.get(`${API_PRODUCT_URI}?limit=10`);
      const content = await response.data.items.map((item: ProductCardProps) => <ProductCard {...item} />)
      setCards(content)
    }
    renderProducts()
  }, [])

  return (
  <> 
    <h1>Products</h1>
    <Container>
      {cards}
    </Container>
  </>
  )
}

export default ProductsContent;
