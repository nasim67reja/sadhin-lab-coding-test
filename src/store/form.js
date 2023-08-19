import { createSlice } from "@reduxjs/toolkit";

const initialFormState = {
  status: "",
  data: {},
};

const formSlice = createSlice({
  name: "form-controler",
  initialState: initialFormState,
  reducers: {
    statusHandler(state, action) {
      state.status = action.payload;
    },
    addHandler(state, action) {
      state.data = action.payload;
    },
  },
});

export const formActions = formSlice.actions;

export default formSlice.reducer;
