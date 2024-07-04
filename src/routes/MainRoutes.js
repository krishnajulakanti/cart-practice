import { Layout } from 'antd'
import React, { lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import NotFound from '../pages/NotFound';

const { Content } = Layout;

const Products = lazy(() => import('../pages/Products'))
const ProductDetail = lazy(() => import('../features/products/ProductDetail'))
const Cart = lazy(() => import('../pages/Cart'))

const MainRoutes = () => {
  return (
    <Layout>
      <Header />
      <Content className='app-content'>
        <Routes>
          <Route path='/' element={<Navigate replace to='/products' />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Content>
      <Footer />
    </Layout>
  )
}

export default MainRoutes