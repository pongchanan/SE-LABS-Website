import { configureStore } from "@reduxjs/toolkit";
// import mainSlice from "./main-slice";
import editSlice from "./edit-slice";
const store = configureStore({
  // main: mainSlice.reducer
  reducer: { edit: editSlice.reducer },
});

export default store;
