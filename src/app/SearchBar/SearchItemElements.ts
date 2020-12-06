import styled from 'styled-components';

export const SearchForm = styled.form`
  display:flex;
  align-items: center;

  .search-label {
    position: relative;

    input:focus + .search-icon {
      color: #000;
      right: 18px;
    }

    input:active + .search-icon {
      color: #000;
      right: 18px;
    }

    .search-icon {
      position: absolute;
      font-size: 20px;
      top: 15px;
      right: 10px;
      color: #959595;
      transition: all .4s;
      &:hover {
        color: #000;
        cursor: pointer;
      }
    }
  }
`

export const SearchInput = styled.input`
  margin-left: 105px;
  outline: none;
  line-height: 16px;
  border: 1px solid #E0E2EA;
  width: 392px;
  padding: 16px;
  border-radius: 8px;
  transition: all .4s;
 
  &:focus {
    border: 1px solid #aeafaf;
}
`

export const CheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: min-content auto;
  grid-gap: 32px;
  margin: 0 24px;
`

export const StyledCheckbox = styled.label`
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

export const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
`