import { configureStore } from "@reduxjs/toolkit";
import userSlise from "./features/user/userSlise";
import adminSlise from "./features/adminSlice";

export const store = configureStore({
  reducer: {
    user: userSlise,
    admin: adminSlise,
  },
});
