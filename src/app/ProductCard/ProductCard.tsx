import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button/Button';
import { Product } from '../../models/Product';
import { ReactComponent as StarFilled } from '../../assets/icons/starFull.svg';
import { ReactComponent as StarEmpty } from '../../assets/icons/starEmpty.svg';
import theme from '../../theme/theme'

const CardContainer = styled.div<{ active: boolean }>`
  position: relative;
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
    margin-top: auto;
    margin-bottom: 18px;

    .star {
      width: 13px;
      height: 13px;
    }
  }
`

const ImageContainer = styled.div<{ image: string, active: boolean }>`
  height: 180px;
  width: 100%;
  background: url(${props => props.image});
  filter: ${props => !props.active && `grayscale(1) opacity(0.5)`};
  background-size: cover;
`

const PromoFlag = styled.p <{ active: boolean }>`
  position: absolute;
  top: 20px;
  left: 0;
  color: #fff;
  text-align: center;
  line-height: 24px;
  font-size: 14px;
  width: 75px;
  height: 24px;
  background-color: ${props => props.active ? theme.palette.attention.main : theme.palette.button.disabled};
`

export const ProductCard = ({
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

  return (
    <CardContainer active={active}>
      <ImageContainer image={image} active={active} />
      <div className="content">
        <h6>{name}</h6>
        <p className='description'>{description}</p>
        <div className="promo">{promo}</div>
        {active && <p>active </p>}
        {promo && <PromoFlag active={active}>Promo</PromoFlag>}
        <div className="rating">{renderRating()}</div>
        <Button disabled={!active} >{active ? `Show details` : `Unavailable`}</Button>
      </div>
    </ CardContainer>
  )
}
