import React from 'react';
import styled from 'styled-components';
import theme from '../../theme/theme'
import { ReactComponent as Bag } from '../../assets/icons/bag.svg';

const Container = styled.div`
  place-self: center;
  width: 600px;
  height: 350px;
  border-radius: 8px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 650px) {
    width: 100%;
  }

  h3 {
    font-size: 18px;
    maring-top: 22px;
  }

  .description {
    font-size: 14px;
    color: ${theme.palette.text.cardDescription};
  }
`

export const NotFound = () => {
  return (
    <Container>
      <Bag />
      <h3>Oooops... It's empty here</h3>
      <p className="description">Tehre are no products on the list</p>
    </Container>
  )
}