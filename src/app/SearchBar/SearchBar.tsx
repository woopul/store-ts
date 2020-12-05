import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import products from '../../config/api';
import { API_PRODUCT_URI } from '../../constants/api'
import { BiSearch } from 'react-icons/bi';
import {ReactComponent as CheckdIcon} from '../../assets/icons/check.svg';
import {
  SearchForm,
  SearchInput,
  Checkbox,
  StyledCheckbox,
  CheckboxContainer
} from './SearchItemElements';
import { fetchProductsAction, setProductsAction } from  '../../store/products/actions'
import styled from 'styled-components';

interface SearchData {
  searchValue: string;
  active: boolean;
  promo: boolean;
}

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState<SearchData>({searchValue: '', active: false, promo: false})

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.persist();
    setSearchData(prev => ({...prev, [event.target.name]: event.target.value}))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<SVGElement, MouseEvent>) => {
    event.preventDefault();
    dispatch(fetchProductsAction(searchData.searchValue));
  } 

  return (
    <SearchForm onSubmit={handleSubmit} >
      <label className="search-label">
        <SearchInput
          name='searchValue'
          onChange={handleChange}
          value={searchData.searchValue}
          placeholder='Search' />
        <BiSearch onClick={handleSubmit} className='search-icon' />
      </label>
      <CheckboxContainer >
        <StyledCheckbox >
          <span className="checkbox__input">
            <Checkbox onChange={handleChange} type="checkbox" name="active" />
            <span className="checkbox__control">
              <CheckdIcon className='checkbox__icon' />
            </span>
            </span>
          <span className="checkbox__label">
            Active
          </span>
        </StyledCheckbox>

        <StyledCheckbox >
          <span className="checkbox__input">
            <Checkbox onChange={handleChange} type="checkbox" name="promo"  />
            <span className="checkbox__control">
              <CheckdIcon className='checkbox__icon' />
            </span>
          </span>
          <span className="checkbox__label">
            Promo
          </span>
        </StyledCheckbox>
      </CheckboxContainer>
    </SearchForm >
  )
}

export default SearchBar;