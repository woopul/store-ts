import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import { Container as MainContainer } from '../common/Container'
import { Button } from '../common/Button'
import { InputText } from '../common/InputText'
import bg from '../../assets/bg.png'
import { Logo } from 'app/common/Logo';

export const Login = () => {
  // TODO: form control, redirect, add flag to global store 

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    console.log(target.value);
  }

  // mocked
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const validateForm = () => true;
    if (validateForm()) {
      const submitSuccess = await new Promise((resolve, reject) => {
        console.log('starting submite')
        setTimeout(() => {
          console.log('FETCHED');
          resolve('resolved');
        }, 2000)
      }).then((resp) => console.log(resp))

    }
  }
  return (
    <MainContainer>
      <Container>
        <div className="image-container">
          {/* <img src={bg} alt="" /> */}
        </div>
        <div className="content-container">
          <Logo />

          <h2>Login</h2>
          <Link to={AppRoute.home}>Products page</Link>
          <form onSubmit={handleSubmit} className='login-form'>
            <div className='input-control'>
              <label htmlFor='username'>Username:</label>
              <InputText onChange={handleChange} placeholder='Enter username' id='username' name="username" />
            </div>
            <div className='input-control'>
              <label htmlFor='password'>Password:</label>
              <InputText onChange={handleChange} placeholder='Enter password' id='password' name="password" type="password" />
            </div>
            <Button className='login-button' type="submit">Log in</Button>
          </form>
          <a href="#">Forgot password?</a>
        </div>
      </Container>
    </MainContainer>
  );
};

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(5, 1fr);

  .image-container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    grid-column: 1/ span 2;
    background: url(${bg});
    background-position: center;
    background-size: cover;
  }

  .content-container {
    grid-column: 3/6;
    padding: 52px 120px;
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 30px;
      margin-top: 200px;
    }

    a {
      margin-top: 16px;
      font-size: 14px;
      color: #9194A5;
    }

    .login-form {
      width: 500px; 

      .input-control:first-child {
        margin-top: 29px;
      }

      .input-control:nth-child(2) {
        margin-top: 22px;
      }

      .login-button {
        width: 100%;
        margin-top: 50px;
      }

      label {
        display: inline-block;
        font-weight: 600;
        margin-bottom: 8px;
        &:hover {
          cursor: pointer;
        }
      }

    }

  }
`
