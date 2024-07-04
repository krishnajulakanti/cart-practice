import { useDispatch, useSelector } from "react-redux"
import { fetchProducts, fetchProductsById } from "../features/products/productSlice";

const useProduct = () => {

  const dispatch = useDispatch();
  const productState = useSelector((state) => state?.product)

  const loadProducts = () => {
    dispatch(fetchProducts())
  }

  const loadProductsById = (id) => {
    dispatch(fetchProductsById(id))
  }

  return {
    ...productState,
    loadProducts,
    loadProductsById
  }
}

export default useProduct;