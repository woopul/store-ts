import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../common/Button/Button';
import { Product } from '../../models/Product';
import { Transition } from 'react-transition-group';
import { ReactComponent as StarFilled } from '../../assets/icons/starFull.svg';
import { ReactComponent as StarEmpty } from '../../assets/icons/starEmpty.svg';
import theme from '../../theme/theme'
import { ProductDetail } from '../ProductDetail/ProductDetail';


const ImageContainer = styled.div<{ image: string, active: boolean }>`
  height: 180px;
  width: 100%;
  background: url(${props => props.image});
  filter: ${props => !props.active && `grayscale(1) opacity(0.5)`};
  background-size: 100%;
  transition: all .8s;
`

const CardContainer = styled.div<{ active: boolean }>`
  position: relative;
  display: grid;
  grid-template-rows: 1fr 1fr;
  background: #fff;
  width: 288px;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;

  &:hover, &:focus {
    box-shadow: ${props => props.active ? '2px 2px 8px 1px #8a8a8a2e' : 'none'};
    ${ImageContainer} {     
      background-size: ${props => props.active ? '110%' : ''}
    }
  }

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
  const [isDetailOpen, setDetailOpen] = useState(false);

  const renderRating = () => {
    return Array(5).fill(null).map((n, i) => {
      return i < rating ? <StarFilled key={i} className='star' /> : <StarEmpty key={i} className='star' />
    });
  }

  const handleDetailClick = () => {
    setDetailOpen(prev => !prev);
  }

  return (
    <CardContainer active={active}>
      <ImageContainer image={image} active={active} />
      <div className="content">
        <h6>{name}</h6>
        <p className='description'>{description}</p>
        <div className="promo">{promo}</div>
        {promo && <PromoFlag active={active}>Promo</PromoFlag>}
        <div className="rating">{renderRating()}</div>
        <Button onClick={handleDetailClick} disabled={!active} >{active ? `Show details` : `Unavailable`}</Button>
      </div>
      {/* {isDetailOpen && */}
      <Transition in={isDetailOpen} timeout={300}>
        {state => {
          console.log(state);
          return <ProductDetail state={state} description={description} image={image} name={name} onClose={handleDetailClick} />
        }}
      </Transition>
    </ CardContainer>
  )
}
