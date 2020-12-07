import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _, { debounce } from 'lodash';
import { fetchProductsAction } from '../../store/products/actions';
import { selectProductsFilters, selectProductsPage, selectProductsSearchTerm } from '../../store/products/selectors';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import { Header } from '../header/Header';
import { ProductsContent } from '../ProductsContent/ProductsContent';
import { Pagination } from '../Pagination/Pagination';

export const Products = () => {
  const dispatch = useDispatch();
  const { active, promo } = useSelector(selectProductsFilters);
  const page = useSelector(selectProductsPage);
  const searchTerm = useSelector(selectProductsSearchTerm);

  const debouncedFetchProducts = useCallback(debounce(searchParams => {
    dispatch(fetchProductsAction(searchParams));
  }, 300), []);

  useEffect(() => {
    console.log(' after page changed')
    dispatch(fetchProductsAction({ searchTerm, page, active, promo }));
  }, [active, promo, page])

  useEffect(() => {
    debouncedFetchProducts({ searchTerm, page, active, promo });
  }, [searchTerm]);

  return (
    <>
      <Header />
      <Link to={AppRoute.login}> Login </Link>
      <ProductsContent />
      <Pagination />
    </>
  );
};
