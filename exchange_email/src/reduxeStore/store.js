import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./dataSlice";

export default configureStore({
  reducer: {
    usersData: usersReducer,
  },
});
