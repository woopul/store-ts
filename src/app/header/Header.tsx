import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import styled from 'styled-components';
import user from '../../assets/avatar/avatar.png'

const Container = styled.div`
  width: 100vw;
  height: 144px;
  background: #fff;
  display: flex;
  align-items: center;
    @media (max-width: 1100px) {
      height: auto;
      padding: 42px 24px 20px 24px;
    }
  `

const HeaderContent = styled.div`
  flex: 0 1 1440px;
  display: flex;
  align-items: center;
  padding: 0 108px;

  @media (max-width: 1100px) {
    padding: 0 5vw;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
      "logo user"
      "search search"
  }
  `

const Logo = styled.h1`
  grid-area: logo;
  color: #000;
  font-size: 24px;
  font-family: 'Nunito';
`

const User = styled.div<{ bg: string }>`
  min-width: 48px;
  min-height: 48px;
  grid-area: user;
  background: #bada55;
  border-radius: 50%; 
  margin-left: auto;
  background: url(${props => props.bg});
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 3px 3px #8a8a8a7a;
  }
`

export const Header = () => {

  return (
    <Container>
      <HeaderContent>
        <Logo>join.tsh.io</Logo>
        <SearchBar />
        <User bg={user} />
      </HeaderContent>
    </Container>
  )
}