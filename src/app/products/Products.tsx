import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header'
import ProductsContent from '../ProductsContent/ProductsContent';

import { AppRoute } from 'routing/AppRoute.enum';

export const Products = () => {
  return (
    <>
    <Header />
    <Link to={AppRoute.login}> Login </Link>
    <ProductsContent />
    </>
  );
};
