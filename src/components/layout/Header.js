import { Layout, Menu } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const { Header: AntHeader } = Layout;

const Header = () => {

  const navigate = useNavigate();

  const menuItems = [
    {
      key: '1',
      label: <Link to='/'>Home</Link>
    },
    {
      key: '2',
      label: <Link to="/products">Products</Link>,
    },
    {
      key: '3',
      label: <Link to="/cart">Cart</Link>,
    },
    {
      key: '4',
      label: 'Logout',
      // onClick: logout,
    },
  ]

  const logout = () => {
    // logoutUser();
    navigate('/')
  }
  return (
    <AntHeader>
      <div className='logo' />
      <Menu theme='dark' mode='horizontal' items={menuItems} />
    </AntHeader>
  )
}

export default Header