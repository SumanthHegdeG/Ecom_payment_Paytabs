import { createSlice } from '@reduxjs/toolkit'

const users = [
  {
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    password: 'johndoe123',
  },
]

const initialState = {
  userInfo: {
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    password: 'johndoe123',
  },
  error: null,
  success: null,
  cart: {
    cartItems: [{ id: '629f3b21be2f1438a4462ecf', quantity: 1 }],
    totalQuantity: 1,
  },
  shippingAddress: {},
  paymnetMethod: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      const user = users.find((user) => {
        return (
          user.password === payload.password && user.email === payload.email
        )
      })

      if (user) {
        state.userInfo = user
        state.error = null
        state.success = true
      } else state.error = 'wrong email or password'
    },
    logout: (state) => {
      state.userInfo = {}
      state.cart = {
        cartItems: [],
        totalQuantity: 0,
      }
      state.address = {}
      state.error = null
      state.success = true
    },
    addToCart: (state, { payload }) => {
      const item = state.cart.cartItems.find((item) => item.id === payload)
      if (item) {
        item.quantity = item.quantity + 1
      } else {
        state.cart.cartItems = [
          ...state.cart.cartItems,
          { id: payload, quantity: 1 },
        ]
      }
      state.cart.totalQuantity = state.cart.totalQuantity + 1
    },
    RemoveFromCart: (state, { payload }) => {
      const item = state.cart.cartItems.find((item) => item.id === payload)
      if (item.quantity > 1) {
        item.quantity = item.quantity - 1
      } else {
        state.cart.cartItems = state.cart.cartItems.filter(
          (item) => item.id !== payload
        )
      }
      state.cart.totalQuantity = state.cart.totalQuantity - 1
    },
    saveShippingAddress: (state, { payload }) => {
      state.shippingAddress = { ...payload }
    },
    savePaymentMethod: (state, { payload }) => {
      state.paymnetMethod = payload
    },
    placeOrder: (state) => {
      state.cart.cartItems = []
      state.cart.totalQuantity = 0

      state.shippingAddress = {}
      state.paymnetMethod = ''
    },
    resetErrors: (state) => {
      state.error = null
      state.success = null
    },
  },
})

export default userSlice.reducer
export const {
  login,
  logout,
  resetErrors,
  addToCart,
  RemoveFromCart,
  saveShippingAddress,
  savePaymentMethod,
  placeOrder,
} = userSlice.actions
