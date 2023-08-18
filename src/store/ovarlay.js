import { createSlice } from "@reduxjs/toolkit";

const initialOvarlayState = {
  backdropVisible: false,
  signUpFormIsVisible: false,
  nextBtnIsDisiable: true,
  previousBtnIsDisiable: true,
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
    previousBtnHandler(state, action) {
      state.previousBtnIsDisiable = action.payload;
    },
    nextsBtnHandler(state, action) {
      state.nextBtnIsDisiable = action.payload;
    },
  },
});

export const overlayActions = ovarlaySlice.actions;

export default ovarlaySlice.reducer;
