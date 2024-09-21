import { createSlice } from "@reduxjs/toolkit";
const mainSlice = createSlice({
  name: "main",
  initialState: {
    items: [],
    admin: false,
    researcher: false,
    leadResearcher: false,
  },
  reducers: {},
});
export default mainSlice;