import { configureStore } from "@reduxjs/toolkit";
// import mainSlice from "./main-slice";
import editSlice from "./edit-slice";
import mainSlice from "./main-slice";
const store = configureStore({
  // main: mainSlice.reducer
  reducer: { edit: editSlice.reducer, mainSlice: mainSlice.reducer },
});

export default store;
