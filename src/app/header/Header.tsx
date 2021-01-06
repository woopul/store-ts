import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import user from '../../assets/avatar/avatar.png'
import SearchBar from '../SearchBar/SearchBar';
import { Button } from '../common/Button';
import { Logo } from '../common/Logo';

const Container = styled.div`
  width: 100vw;
  height: 144px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
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
      "search search";
  }
  `

const UserMenu = styled.ul<{ open: boolean }>`
    display: ${props => props.open ? 'block' : 'none'};
    position: absolute;
    list-style: none;
    top: 76px;
    background: #fff;
    left: -138px;
    width: 185px;
    padding: 10px 16px;
    border-radius: 4px;
    box-shadow: 0px 8px 32px rgba(17, 18, 20, 0.158514);

    li {
      font-size: 14px;
      line-height: 30px;
      &:hover {
        font-weight: bold;
      }
    }
`

const User = styled.div<{ bg: string }>`
  position: relative;
  min-width: 48px;
  min-height: 48px;
  grid-area: user;
  border-radius: 50%; 
  margin-left: auto;
  background: url(${props => props.bg});
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 3px 3px #8a8a8a7a;
  }
`

const UserLoginContainer = styled.div`
  position: relative;
  grid-area: user;
  font-size: 14px;
  margin-left: auto;

  .button-login {
    width: 88px;
  }
`

export const Header = () => {
  const [isLoggedIn, setLogin] = useState<boolean>(true);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const menuNode = useRef<HTMLUListElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleCloseMenu);

    return () => document.removeEventListener("mousedown", handleCloseMenu);
  }, [])

  const handleCloseMenu = (event: MouseEvent): any => {
    if (menuNode && !menuNode.current?.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  }

  const handleMenuOpen = () => {
    setMenuOpen(prev => !prev);
  }

  return (
    <Container>
      <HeaderContent>
        <Logo />
        <SearchBar />
        <UserLoginContainer>
          {isLoggedIn ?
            <User bg={user} onClick={handleMenuOpen}>
              <UserMenu open={isMenuOpen} ref={menuNode}>
                <li onClick={() => setLogin(false)}>Logout</li>
              </UserMenu>
            </User> :
            <Button onClick={() => setLogin(true)} className='button-login' secondary>LogIn</Button>
          }
        </UserLoginContainer>
      </HeaderContent>
    </Container >
  )
}