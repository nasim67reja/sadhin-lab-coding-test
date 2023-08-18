import { createSlice } from "@reduxjs/toolkit";

const initialOvarlayState = {
  backdropVisible: false,
  signUpFormIsVisible: false,
};

const ovarlaySlice = createSlice({
  name: "ovarlay-controler",
  initialState: initialOvarlayState,
  reducers: {
    backdropVisible(state) {
      state.backdropVisible = true;
    },
    backdropHidden(state) {
      state.backdropVisible = false;
    },
    signUpFormVisibleHandler(state) {
      state.signUpFormIsVisible = true;
    },
    signUpFormHiddenHandler(state) {
      state.signUpFormIsVisible = false;
    },
  },
});

export const overlayActions = ovarlaySlice.actions;

export default ovarlaySlice.reducer;
