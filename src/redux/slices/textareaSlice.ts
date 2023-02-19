import { createSlice } from "@reduxjs/toolkit";

type Tvalue = {
};



const initialState = {
//   items: [],
//   status: "loading",
};

const areaSlice = createSlice({
  name: "textarea",
  initialState,
  reducers: {
    setInput: (state, action) => {
    //   state.items = action.payload;
    },
  },
});

export const { setInput } = areaSlice.actions;

export default areaSlice.reducer;