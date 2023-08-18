import { createSlice } from "@reduxjs/toolkit";

const initialEmployeeState = {
  employee: [],
  admin: [],
};

const employeeSlice = createSlice({
  name: "employee-controler",
  initialState: initialEmployeeState,
  reducers: {
    addEmployee(state, action) {
      state.employee = [...state.employee, ...action.payload];
    },
    addAdmin(state, action) {
      state.admin = [...state.admin, ...action.payload];
    },
  },
});

export const employeeActions = employeeSlice.actions;

export default employeeSlice.reducer;
