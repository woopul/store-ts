import React from 'react';
import styled from 'styled-components';
import {Product} from '../../models/Product'

const CardContainer = styled.div`
  width: 288px;
  height: 400px;
  border-radius: 8px;
  box-shadow: 1px 1px 10px 1px black;
  padding: 20px;

  img {
    width: 100%;
  }

  p {
    margin-top: 5px;
  }
`

const ProductCard = ({
  active,
  description,
  id,
  image,
  name,
  promo,
  rating} : Product) => {

  return (
    <CardContainer>
      <img src={image} alt="" />
      <h4>{name}</h4>
      <p>{description}</p>
      <p>promo {promo}</p>
      <p>active {active}</p>
      <p>rating {rating}</p>
    </CardContainer>
  )
}

export default ProductCard; 
