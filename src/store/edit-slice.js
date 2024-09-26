// src/redux/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  selectedImage: null,
  isCreate: null,
};

const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    creating: (state) => {
      state.isCreate = true;
    },
    editing: (state) => {
      state.isCreate = false;
    },

    setImage: (state, action) => {
      state.selectedImage = action.payload;
    },
    clearImage: (state) => {
      state.selectedImage = null;
    },
  },
});

export const editAction = editSlice.actions;
export default editSlice;
