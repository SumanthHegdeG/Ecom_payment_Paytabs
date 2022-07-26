import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Product from '../components/Product'

const Home = () => {
  const { products, categories } = useSelector((state) => state.product)
  const { cartItems } = useSelector((state) => state.user.cart)

  return (
    <Row className='justify-content-center'>
      {products.map((product) => (
        <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
          <Product
            product={product}
            quantity={cartItems.reduce((value, item) => {
              if (item.id === product.id) return item.quantity
              return value
            }, 0)}
          />
        </Col>
      ))}
    </Row>
  )
}

export default Home
