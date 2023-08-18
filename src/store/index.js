import { configureStore } from "@reduxjs/toolkit";
import ovarlayReducer from "./ovarlay";

const store = configureStore({
  reducer: {
    ovarlay: ovarlayReducer,
  },
});
export default store;
