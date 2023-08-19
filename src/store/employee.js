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
      state.employee = [...state.employee, ...action.payload]; // store the fetched element(currently fetch + previous fetch)
    },
    addEmployeeLast(state, action) {
      if (state.employee.length % 5 === 0)
        state.employee[state.employee.length - 1] = action.payload;
      // replace the last element with the newly added element for showing immediately
      else state.admin.push(action.payload); // if less than 5 element is visible then show currently added element in last
    },
    addAdmin(state, action) {
      state.admin = [...state.admin, ...action.payload];
    },
    addAdminLast(state, action) {
      if (state.admin.length % 5 === 0)
        state.admin[state.admin.length - 1] = action.payload;
      else state.admin.push(action.payload);
    },
  },
});

export const employeeActions = employeeSlice.actions;

export default employeeSlice.reducer;
