import { configureStore } from "@reduxjs/toolkit";
import ovarlayReducer from "./ovarlay";
import employeeReducer from "./employee";
import formReducer from "./form";
import categoryReducer from "./category";
const store = configureStore({
  reducer: {
    ovarlay: ovarlayReducer,
    employee: employeeReducer,
    form: formReducer,
    categories: categoryReducer,
  },
});
export default store;
