import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToCart, RemoveFromCart } from '../features/users/userSlice'

const Product = ({ product, quantity }) => {
  const dispatch = useDispatch()

  return (
    <Card className='my-3 p-3 rounded shadow'>
      <Card.Img src={product.image} variant='top' />

      <hr />
      <Card.Body>
        <Card.Title as='div'>
          <strong>{product.name}</strong>
        </Card.Title>

        <Card.Text as='h3'>Rs {product.price}</Card.Text>
        <Card.Text as='p' style={{ height: '120px', overflowY: 'auto' }}>
          {product.description}
        </Card.Text>
        <hr />
        <div className='d-flex justify-content-center py-3'>
          {quantity ? (
            <div className='border d-flex gap-3 align-items-center'>
              <Button
                className='rounded-0'
                variant='light'
                onClick={() => {
                  dispatch(RemoveFromCart(product.id))
                }}
              >
                -
              </Button>
              <span>{quantity}</span>
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
          ) : (
            <Button
              onClick={() => {
                dispatch(addToCart(product.id))
              }}
            >
              Add to Cart
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}

export default Product
