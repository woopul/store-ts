import React, { useState, useEffect } from 'react';
import products from '../../config/api';
import { API_PRODUCT_URI } from '../../constants/api'
import { BiSearch } from 'react-icons/bi';
import {
  SearchForm,
  SearchInput,
  Checkbox
} from './SearchItemElements';
import styled from 'styled-components';

interface SearchData {
  searchValue: string;
  active: boolean;
  promo: boolean;
}

const SearchBar = () => {
  const [searchData, setSearchData] = useState<SearchData>({searchValue: '', active: false, promo: false})

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.persist();
    console.log('event', event)
    setSearchData(prev => ({...prev, [event.target.name]: event.target.value}))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<SVGElement, MouseEvent>) => {
    event.preventDefault();
    products.get(API_PRODUCT_URI).then(resp => console.log(resp))
    console.log('YEAYY', searchData.searchValue)
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
      <Checkbox onChange={handleChange} type="checkbox" name="active" id="active" />
      <label htmlFor="active">Active</label>
      <Checkbox onChange={handleChange} type="checkbox" name="promo" id="promo" />
      <label htmlFor="promo">Promo</label>
    </SearchForm >
  )
}

export default SearchBar;