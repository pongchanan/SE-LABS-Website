// src/redux/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isSpecificOpen: false,
  specificTypeAndIDAndData: [null, null, null],
  isCommit: false,
  dataAfterCreate: null,
  isSuccess: [null, null],
  //
  selectedImage: null,
  // bodyText: "",
  isCreate: null,
  isPreview: false,
  currentFormData: null,
  openedDropdown: null,
  savedFormDataArr: [],
  stackedFormDataArr: [],
  createTopic: null,
  //currentPath in main-Slice use also here
};

const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
      state.isSpecificOpen = false;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    setIsSuccess: (state, action) => {
      state.isSuccess = action.payload;
    },
    openSpecificModal: (state, action) => {
      state.isSpecificOpen = true;
      state.isOpen = false;

      state.specificTypeAndIDAndData = action.payload;
      console.log("open modal");

      console.log(state.specificTypeAndIDAndData);
    },
    closeSpecificModal: (state) => {
      console.log("closeSpecificModal");
      return initialState;
    },
    setTypeNull: (state) => {
      state.specificTypeAndIDAndData[0] = null;
    },
    isSpecificClose: (state) => {
      state.isSpecificOpen = false;
    },
    resetSpecificTypeAndIDAndData: (state) => {
      state.specificTypeAndIDAndData = null;
    },
    isCommit: (state, action) => {
      state.isCommit = action.payload;
    },
    resetIsCommit: (state) => {
      state.isCommit = false;
    },

    changeDataAfterCreate: (state, action) => {
      state.dataAfterCreate = action.payload;
    },

    reset: () => {
      console.log("reset");

      return initialState;
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
    currentDropdown: (state, action) => {
      state.openedDropdown = action.payload;
    },
    //   clearEditState:(state)=>{

    //     isOpen: false,
    // selectedImage: null,
    // // bodyText: "",
    // isCreate: null,
    // isPreview: false,
    // currentFormData: null,
    // openedDropdown: null,
    //   },
    //   resetEditState: (state) =>{  openedDropdown: null,  selectedImage: null,

    //   },

    closeStackedArr: (state) => {
      const lastIndex = state.stackedFormDataArr.length - 1;
      if (lastIndex >= 0) {
        state.stackedFormDataArr[lastIndex] -= 1;
      }
    },
    openNewStack: (state, action) => {
      state.stackedFormDataArr = [...state.stackedFormDataArr, action.payload];
    },
    setCreateTopic: (state, action) => {
      state.createTopic = action.payload;
    },
  },
});

export const editAction = editSlice.actions;
export default editSlice;
