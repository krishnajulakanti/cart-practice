import { combineReducers } from  'redux'
import productReducer from '../features/products/productSlice'
import cartReducer from '../features/cart/cartSlice'

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer
})

export default rootReducer