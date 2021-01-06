import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BiSearch } from 'react-icons/bi';
import { setValueAction, setFilteresAction } from '../../store/products/actions';
import { Checkbox } from '../common/Checkbox';
import { InputText } from '../common/InputText';
import { ReactComponent as CheckdIcon } from '../../assets/icons/check.svg';
import {
  SearchForm,
  SearchInput,
  CheckboxContainer
} from './SearchItemElements';

export interface SearchFilter {
  active?: boolean;
  promo?: boolean;
}

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(target.value);
    dispatch(setValueAction(target.value))
  }

  const handleChangeFilter = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilteresAction({ [target.name]: target.checked || undefined }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<SVGElement, MouseEvent>) => {
    event.preventDefault();
    dispatch(setValueAction(searchTerm));
  }

  return (
    <SearchForm onSubmit={handleSubmit} >
      <label className="search-label">
        <InputText
          autoComplete='off'
          name='searchValue'
          onChange={handleChange}
          value={searchTerm}
          placeholder='Search' />
        <BiSearch onClick={handleSubmit} className='search-icon' />
      </label>
      <CheckboxContainer >
        <Checkbox name='active' label='Active' onChange={handleChangeFilter} />
        <Checkbox name='promo' label='Promo' onChange={handleChangeFilter} />
      </CheckboxContainer>
    </SearchForm >
  )
}

export default SearchBar;