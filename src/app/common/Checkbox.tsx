import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CheckdIcon } from '../../assets/icons/check.svg';


export const Checkbox = ({ name, label, onChange }: ICheckbox) => {
  return (
    <StyledCheckbox >
      <span className="checkbox__input">
        <input onChange={onChange} type="checkbox" name={name} />
        <span className="checkbox__control">
          <CheckdIcon className='checkbox__icon' />
        </span>
      </span>
      <span className="checkbox__label">
        {label}
      </span>
    </StyledCheckbox>
  )
}

interface ICheckbox {
  name: string;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledCheckbox = styled.label`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  grid-gap: 8px;

  &:hover {
    cursor: pointer;
  }

  .checkbox__input {
    display: grid;

    .checkbox__control {
      display: grid;
      width: 24px;
      height: 24px;
      border: 1px solid #E0E2EA;
      border-radius: 4px;
    }

    input {
      opacity: 0;
      height: 15px;
      position: absolute;
      opacity: 0;

      &:checked ~ .checkbox__control {
        background: #4460F7;
        border: none;
      }

      &:checked ~ .checkbox__control .checkbox__icon {
        transform: scale(1);
      }
    }

    .checkbox__icon {
      place-self: center;
      width: 18px;
      height: 10px;
      transition: transform 50ms ease-in 20ms;
      transform: scale(0);
      transform-origin: bottom-left;
    }
    
  }
`