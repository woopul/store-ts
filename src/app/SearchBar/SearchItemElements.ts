import styled from 'styled-components';

export const SearchForm = styled.form`
  display:flex;
  align-items: center;

  [type='checkbox'] {
    margin: 0 8px 0 24px;
  }
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

export const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  border: 1px solid #E0E2EA;
  border-radius: 4px;
`