import { configureStore } from "@reduxjs/toolkit";
import ovarlayReducer from "./ovarlay";
import employeeReducer from "./employee";
import formReducer from "./form";

const store = configureStore({
  reducer: {
    ovarlay: ovarlayReducer,
    employee: employeeReducer,
    form: formReducer,
  },
});
export default store;
