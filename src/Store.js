import { configureStore } from "@reduxjs/toolkit";
import userSlise from "./features/user/userSlise";

export const store = configureStore({
  reducer: {
    user: userSlise,
  },
});
