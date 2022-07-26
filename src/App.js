import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import CartScreen from './pages/CartScreen'
import Home from './pages/Home'
import Login from './pages/Login'
import Shipping from './pages/Shipping'
import Payment from './pages/Payment'
import PlaceOrder from './pages/PlaceOrder'
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Container className='mt-5'>
          <Routes>
            <Route path='/'>
              <Route index element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/cart' element={<CartScreen />} />
              <Route path='/shipping' element={<Shipping />} />
              <Route path='/payment' element={<Payment />} />
              <Route path='/placeOrder' element={<PlaceOrder />} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
