import { Card, List } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useProduct from '../hooks/useProduct'

const Products = () => {

  const { products, loadProducts, loading, error } = useProduct();

  // const [products, setProducts] = useState([])

  // useEffect(()=> {
  //   fetch('https://fakestoreapi.com/products')
  //   // fetch('http://localhost:5000/items')
  //   .then(res => res.json())
  //   .then(data => {setProducts(data); console.log(data, "data")})
  // }, [])

  useEffect(() => {
    loadProducts();
  }, [])

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Prodcuts Available</h1>
      <List grid={{gutter: 16, column: 4}} dataSource={products}
      renderItem={(product) => (
        <List.Item>
          <Card title={product?.title}>
            <p>{product?.price}</p>
            <Link to={`/products/${product?.id}`}>View Details</Link>
          </Card>
        </List.Item>
      )}
      />
    </div>
  )
}

export default Products



{/* {products.map(product => 
        <li key={product.id}>{product.id}-{product.title}</li>
      )} */}