import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "users",
  initialState: {
    value: JSON.parse(sessionStorage.getItem("key")),
    login: JSON.parse(sessionStorage.getItem("key")) ? true : false,
  },
  reducers: {
    getData: (state, data) => {
      state.value = data.payload;
    },

    clear: (state, data) => {
      state.login = data.payload;
    },
  },
});

export const { getData, clear } = dataSlice.actions;
export default dataSlice.reducer;
