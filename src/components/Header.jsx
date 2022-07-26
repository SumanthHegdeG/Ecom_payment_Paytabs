import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

import { logout } from '../features/users/userSlice'
const Header = () => {
  const { name } = useSelector((state) => state.user.userInfo)
  const { totalQuantity } = useSelector((state) => state.user.cart)
  const dispatch = useDispatch()

  return (
    <Navbar variant='dark' bg='dark' expand='sm'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='navbar-dark-example' />
        <Navbar.Collapse
          id='navbar-dark-example'
          className='justify-content-end'
        >
          <Nav className='gap-4'>
            <LinkContainer to='/cart'>
              <Nav.Link>
                <span className='border rounded-3 px-4 py-2'>
                  Cart
                  <span className='bg-white text-black px-1 rounded-pill'>
                    {totalQuantity}
                  </span>
                </span>
              </Nav.Link>
            </LinkContainer>

            {name ? (
              <NavDropdown id='nav-dropdown-dark-example' title={`Hi ${name}`}>
                <NavDropdown.Item
                  onClick={() => {
                    dispatch(logout())
                  }}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <div>
                <Link to='/login'>
                  <Button className='rounded-pill px-4 '>Login</Button>
                </Link>
                <Link to='/register'>
                  <Button className='rounded-pill ms-3 px-4'>Register</Button>
                </Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
