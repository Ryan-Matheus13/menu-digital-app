import { createSlice } from "@reduxjs/toolkit";
import { rootInitialState } from "./initialState";

export const rootSlice = createSlice({
  name: "root",
  initialState: rootInitialState,
  reducers: {
    handleSetCategorys(state, action) {
      state.categorys = action.payload;
    },
    handleSetProducts(state, action) {
      state.products = action.payload;
    },
    handleAddProduct(state, action) {
      state.cart.push(action.payload);
    },
    handleSelectAdictional(state, action) {
      state.products[action.payload.productIndex].adictionals.map(
        (adictional, index) => {
          if (index == action.payload.adictionalIndex) {
            adictional.active = true;
          } else {
            adictional.active = false;
          }
        }
      );
    },
    handleResetCart(state, action) {
      state.cart = [];
    },
    handleIncrementProduct(state, action) {
      state.cart.map((product) => {
        if (product.id == action.payload.idProduct) {
          product.quantity = action.payload.quantity + 1;
        }
      });
    },
    handleDecrementProduct(state, action) {
      state.cart.map((product) => {
        if (product.id == action.payload.idProduct) {
          product.quantity = action.payload.quantity - 1;
        }
      });
    },
  },
});
