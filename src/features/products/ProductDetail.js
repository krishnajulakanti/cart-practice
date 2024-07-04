import React, { useEffect } from 'react'
import useProduct from '../../hooks/useProduct';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card } from 'antd';
import useCart from '../../hooks/useCart';

const ProductDetail = () => {
  const { selectedItem, loadProductsById, loading, error } = useProduct();
  const { addItemToCart } = useCart();

  const { id } = useParams();
  const navigate = useNavigate();

  // const getDetails = products.find(product => (product.id == id))
  
  useEffect(()=>{
    loadProductsById(id);
  },[])

  const navigateToCart = (selectedItem) => {
    addItemToCart(selectedItem)
    navigate('/cart');
  }

  return (
    <div style={{ height: '100%', width: '20%' }}>
      <Card title={selectedItem?.title}>
        <img src={selectedItem?.image} alt="cong" style={{ height: '50%', width: '30%' }} />
        <p>Price: ₹ {selectedItem?.price}</p>
        <p>{selectedItem?.description}</p>
        <p>Category: {selectedItem?.category}</p>
        <Button onClick={() => navigateToCart(selectedItem)}>Add to Cart</Button>
      </Card>
    </div>
  )
}

export default ProductDetail