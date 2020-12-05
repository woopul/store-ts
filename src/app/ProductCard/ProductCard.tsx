import React from 'react';
import styled from 'styled-components';
import { Product } from '../../models/Product';
import { ReactComponent as StarFilled } from '../../assets/icons/starFull.svg';
import { ReactComponent as StarEmpty } from '../../assets/icons/starEmpty.svg';
import theme from '../../theme/theme'

const CardContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  background: #fff;
  width: 288px;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;

  .content {
    padding: 0 16px 24px 16px;
    display: flex;
    flex-direction: column;
    
    .description {
      line-height: 16px; 
      margin-top: 8px;
      color: ${theme.palette.text.cardDescription}
    }

    h6 {
      ${theme.typography.h6}
    }
  }

  .rating {
    display: grid;
    grid-template-columns: repeat(auto-fit, 13px);
    grid-template-rows: 1fr;
    grid-gap: 10px;
    .star {
      width: 13px;
      height: 13px;
    }
  }
`

const ImageContainer = styled.div<{ image: string }>`
  height: 180px;
  width: 100%;
  background: url(${props => props.image});
  background-size: cover;
`

const ProductCard = ({
  active,
  description,
  id,
  image,
  name,
  promo,
  rating }: Product) => {

  const renderRating = () => {
    return Array(5).fill(null).map((n, i) => {
      return i < rating ? <StarFilled className='star' /> : <StarEmpty className='star' />
    }
    )
  }

  //TODO : add button
  //TODO : disactivate card || props: active    
  //
  return (
    <CardContainer active={active}>
      <ImageContainer image={image} />
      <div className="content">
        <h6>{name}</h6>
        <p className='description'>{description}</p>
        <div className="promo">{promo}</div>
        <p>active {active}</p>
        <div className="rating">{renderRating()}</div>
      </div>
    </ CardContainer>
  )
}

export default ProductCard; 
