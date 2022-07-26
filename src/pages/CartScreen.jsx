import React from 'react'
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Message from '../components/Message'
import { addToCart, RemoveFromCart } from '../features/users/userSlice'

const CartScreen = () => {
  const { cartItems, totalQuantity } = useSelector((state) => state.user.cart)
  const { products } = useSelector((state) => state.product)
  const dispatch = useDispatch()
  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {totalQuantity === 0 ? (
          <Message>
            Your cart is empty <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => {
              const product = products.find((product) => {
                return product.id === item.id
              })

              if (!product) return <></>
              return (
                <ListGroup.Item key={product.id}>
                  <Row className='align-items-center'>
                    <Col md={2}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        fluid
                        rounded
                      />
                    </Col>
                    <Col md={3}>{product.name}</Col>
                    <Col md={2}>Rs {product.price}</Col>
                    <Col md={2}>
                      <div className='d-flex justify-content-between align-items-center'>
                        <Button
                          className='rounded-0'
                          variant='light'
                          onClick={() => {
                            dispatch(RemoveFromCart(product.id))
                          }}
                        >
                          -
                        </Button>
                        <span>{item.quantity}</span>
                        <Button
                          className='rounded-0'
                          variant='light'
                          onClick={() => {
                            dispatch(addToCart(product.id))
                          }}
                        >
                          +
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )
            })}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>

              {`Rs ${products.reduce((value, product) => {
                if (cartItems.find((item) => item.id == product.id))
                  return product.price
                return value
              }, 0)}`}
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to='/shipping'>
                <Button
                  type='button'
                  className='btn-block bg-info'
                  disabled={cartItems.length === 0}
                >
                  Proceed To Checkout
                </Button>
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartScreen
