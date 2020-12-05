import React, { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import SearchBar from '../SearchBar/SearchBar';
import styled from 'styled-components';

const Container = styled.div`
background: #fff;
  flex: 0 1 1440px;
  height: 144px;
  display: flex;
  align-items: center;
  padding: 0 108px;
`
const Logo = styled.h1`
  color: #000;
  font-size: 24px;
  font-family: 'Nunito'
`

const User = styled.div`
  min-width: 48px;
  min-height: 48px;
  background: #bada55;
  border-radius: 50%; 
  margin-left: auto;
`

const Header = () => {
  const [searchValue, setSearchValue] = useState<string>('')

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchValue(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<SVGElement, MouseEvent>) => {
    event.preventDefault();
    console.log('YEAYY')
  }

  return (
    <Container>
      <Logo>join.tsh.io</Logo>
      <SearchBar/>
      <User />
    </Container>
  )
}

export default Header;