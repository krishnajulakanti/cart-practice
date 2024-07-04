import { useDispatch, useSelector } from 'react-redux';
import { addItem, incrementQuantity, decrementQuantity, removeItem, clearCart } from '../features/cart/cartSlice';

const useCart = () => {

  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);

  const addItemToCart = (item) => {
    dispatch(addItem(item));
  };

  const removeItemFromCart = (item) => {
    dispatch(removeItem(item));
  };

  const incrementQuantityInCart = (item) => {
    dispatch(incrementQuantity(item.id));
  };

  const decrementQuantityInCart = (item) => {
    dispatch(decrementQuantity(item.id));
  };

  const clearCartItems = () => {
    dispatch(clearCart());
  };

  return {
    ...cartState,
    addItemToCart,
    removeItemFromCart,
    clearCartItems,
    incrementQuantityInCart,
    decrementQuantityInCart
  };
};

export default useCart;