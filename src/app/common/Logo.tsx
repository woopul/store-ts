import React from 'react';
import styled from 'styled-components';

export const Logo = () => {
  return (
    <H1>join.tsh.io</H1>
  )
}

const H1 = styled.h1`
    grid-area: logo;
    color: #000;
    font-size: 24px;
    font-family: 'Nunito';
    text-decoration: none;
  `