import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const Decimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x._id === item._id);
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      //Calculate items price
      state.itemsPrice = Decimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      );
      //Calculate shipping price shpping price = 10
      state.shippingPrice = Decimals(state.itemsPrice > 100 ? 0 : 10);
      //Calculate tax price
      state.taxPrice = Decimals(0.15 * state.itemsPrice);
      //Calculate total price
      state.totalPrice = Decimals(
        Number(state.itemsPrice) +
          Number(state.shippingPrice) +
          Number(state.taxPrice)
      );
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
