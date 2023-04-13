import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./cartSlice";

const store=configureStore({
reducer:basketReducer
})
export default store