import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';
import theme from '../../theme/theme';
import { Button } from '../common/Button/Button'
import { ProductDetailType } from '../../models/Product';

const MainWindowContainer = styled.div<{ image: string, state: string }>`
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(2px) brightness(.7);
  width: 100vw; 
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  overflow-y: ${({ state }) => (state === "entered" ? 'hidden' : 'scroll')};
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
  display: ${({ state }) => (state === "exited" ? "none" : "flex")};
  transition: all .5s;

    @media (max-width: 650px) {
      padding: 0 15px;
    }
  
  .card-container {
    position: relative;
    width: 600px;
    height: 530px;
    display: grid;
    grid-template-rows: 2fr 1fr;
    border-radius: 8px;
    background-color: #fff;
    overflow: hidden;
    opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};

      @media(max - width: 650px) {
       height: 570px;
      }
  }

  .image {
    width: 100 %;
    height: 100 %;
    background: url(${props => props.image});
    display: flex;
    flex-direction: flex-end;

    .icon {
      mix-blend-mode: difference;
    }
  }

  .description {
    padding: 24px 32px 20px 32px;
    h3{
      font-size: 24px;
    }
    p {
      font - size: 18px;
      color: ${theme.palette.text.cardDescription}
    }
  }

  .close-icon {
    position: absolute;
    top: 15px;
    right: 15px;
    color: #fff;
    mix-blend-mode: difference;
      &: hover {
      cursor: pointer;
      border-radius: 50 %;
      box-shadow: 0px 0px 4px 5px #00000014;
    }
  }
`

export const ProductDetail = ({
  description,
  image,
  name,
  state,
  onClose,
}: ProductDetailType) => {

  console.log(description, image, name)
  useEffect(() => {
    document.body.style.height = '100vh';
    // document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.height = '';
      document.body.style.overflowY = '';
    }
  }, []);


  return (
    ReactDOM.createPortal(
      <MainWindowContainer state={state} image={image}>
        <div className="card-container">
          <div className="image">
            <CloseIcon className="close-icon" onClick={onClose} />
          </div>
          <div className="description">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </div>
      </MainWindowContainer>,
      document.body
    )
  )
}