import { configureStore } from "@reduxjs/toolkit";
import ovarlayReducer from "./ovarlay";
import employeeReducer from "./employee";

const store = configureStore({
  reducer: {
    ovarlay: ovarlayReducer,
    employee: employeeReducer,
  },
});
export default store;
