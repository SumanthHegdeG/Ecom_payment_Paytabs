import React from 'react'
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CheckoutSteps from '../components/CheckoutSteps'
import Message from '../components/Message'
import { placeOrder } from '../features/users/userSlice'

const PlaceOrder = () => {
  const { shippingAddress, paymnetMethod } = useSelector((state) => state.user)
  const { cartItems, totalQuantity } = useSelector((state) => state.user.cart)
  const { products } = useSelector((state) => state.product)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  if (!shippingAddress.address) {
    navigate('/shipping')
  } else if (!paymnetMethod) {
    navigate('/payment')
  }

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  const itemsPrice = addDecimals(
    products.reduce((acc, item) => {
      const ele = cartItems.find((ele) => ele.id === item.id)
      if (ele) return ele.quantity * item.price
      return acc
    }, 0)
  )

  const shippingPrice = addDecimals(itemsPrice > 100 ? 0 : 100)
  const taxPrice = addDecimals(Number((0.15 * itemsPrice).toFixed(2)))
  const totalPrice = (
    Number(itemsPrice) +
    Number(shippingPrice) +
    Number(taxPrice)
  ).toFixed(2)

  const placeOrderHandler = () => {
    dispatch(placeOrder())
    alert('OrderPlaced')
    navigate('/')
  }

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address:</strong>
                {shippingAddress.address}, {shippingAddress.city}{' '}
                {shippingAddress.postalCode}, {shippingAddress.country}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>Method: </strong>
              {paymnetMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {totalQuantity === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup variant='flush'>
                  {cartItems.map((item) => {
                    const product = products.find((product) => {
                      return product.id === item.id
                    })

                    if (!product) return <></>

                    return (
                      <ListGroup.Item key={product.id}>
                        <Row>
                          <Col md={1}>
                            <Image
                              src={product.image}
                              alt={product.name}
                              fluid
                              rounded
                            />
                          </Col>
                          <Col>{product.name}</Col>
                          <Col md={4}>
                            {item.qty} x Rs {product.price} = Rs{' '}
                            {item.qty * product.price}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    )
                  })}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>Rs {itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>Rs {shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>Rs {taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>Rs {totalPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block bg-info'
                  disabled={totalQuantity === 0}
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default PlaceOrder
