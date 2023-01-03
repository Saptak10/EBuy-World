import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../reducers/user/userSlice'
import userProfileReducer from '../reducers/profile/userProfileSlice'
import productReducer from '../reducers/products/productSlice'
import cartReducer from '../reducers/cart/cartSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    profile: userProfileReducer,
    cart: cartReducer,
  },
})