import { Button, Card, List } from 'antd';
import React from 'react'
import useCart from '../hooks/useCart';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../features/cart/cartSlice';

const Cart = () => {

  const { items, removeItemFromCart, incrementQuantityInCart, decrementQuantityInCart, clearCartItems } = useCart();
  const totalAmount = useSelector(selectCartTotal);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {items?.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <List
            dataSource={items}
            renderItem={(item) => (
              <List.Item>
                <div key={item?.id} className="cart-item" style={{ height: '100%', width: '20%' }}>
                  <Card title={item?.title} >
                    {/* <h2>{item?.title}</h2> */}
                    <img src={item?.image} alt="cong" style={{ height: '100px', width: '100px' }} />
                    <p>Price: ₹ {item?.price}</p>
                    <p>Quantity: {item?.quantity}</p>
                    <p>Total: ₹ {item?.price * item?.quantity}</p>
                    <Button onClick={() => incrementQuantityInCart(item)}>+</Button>
                    <Button onClick={() => decrementQuantityInCart(item)}>-</Button>
                    <Button onClick={() => removeItemFromCart(item)}>Remove Item</Button>
                  </Card>
                </div>
              </List.Item>
            )}
          />
          <Button onClick={clearCartItems}>Clear Cart</Button>
          <h2>Total Amount: ₹ {totalAmount}</h2>
        </div>
      )}
    </div>
  )
}

export default Cart