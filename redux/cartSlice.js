import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
      state.total = parseFloat((state.total + action.payload.price).toFixed(2));
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        state.total -= state.items[index].price;
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id:${action.payload.id}) as it's not in the basket.`
        );
      }
      state.items = newBasket;
    },
    
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectItems = (state) => state.basket.items;

export const selectTotal = (state) => state.basket.total;

export default basketSlice.reducer;
