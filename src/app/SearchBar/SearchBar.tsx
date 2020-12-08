import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BiSearch } from 'react-icons/bi';
import { setValueAction, setFilteresAction } from '../../store/products/actions';
import { ReactComponent as CheckdIcon } from '../../assets/icons/check.svg';
import {
  SearchForm,
  SearchInput,
  Checkbox,
  StyledCheckbox,
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
    dispatch(setFilteresAction({ [target.name]: target.checked ?? undefined }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<SVGElement, MouseEvent>) => {
    event.preventDefault();
    dispatch(setValueAction(searchTerm));
  }

  return (
    <SearchForm onSubmit={handleSubmit} >
      <label className="search-label">
        <SearchInput
          autoComplete='off'
          name='searchValue'
          onChange={handleChange}
          value={searchTerm}
          placeholder='Search' />
        <BiSearch onClick={handleSubmit} className='search-icon' />
      </label>
      <CheckboxContainer >
        <StyledCheckbox >
          <span className="checkbox__input">
            <Checkbox onChange={handleChangeFilter} type="checkbox" name="active" />
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
            <Checkbox onChange={handleChangeFilter} type="checkbox" name="promo" />
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