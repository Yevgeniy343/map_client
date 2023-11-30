import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAdminThunk, remindPassThunk } from "./admin-thunk";
import toast from "react-hot-toast";
import {
  addAdminToLocalStorage,
  removeAdminFromLocalStorage,
  getAdminFromLocalStorage,
} from "../../utils/localStorage";

const initialState = {
  isLoading: false,
  admin: getAdminFromLocalStorage(),
};

export const loginAdmin = createAsyncThunk(
  "admin/loginAdmin",
  async (admin, thunkAPI) => {
    return loginAdminThunk(`/admin/login/`, admin, thunkAPI);
  }
);

export const remindPass = createAsyncThunk(
  "admin/remindPass",
  async (info, thunkAPI) => {
    return remindPassThunk(`/admin/remind_pass/`, info, thunkAPI);
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    logOutAdmin: (state) => {
      state.admin = null;
      removeAdminFromLocalStorage();
      toast.success(`Пока !`);
    },
  },
  extraReducers: (builder) => {
    // loginAdmin
    builder.addCase(loginAdmin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginAdmin.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      const admin = payload.admin;
      state.admin = admin;
      console.log(payload);
      addAdminToLocalStorage(admin);
      toast.success(`Привет Админ !`);
    });
    builder.addCase(loginAdmin.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // remindPass
    builder.addCase(remindPass.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(remindPass.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      toast.success(`Botvarium отправит тебе новый пароль`);
    });
    builder.addCase(remindPass.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
  },
});

export const { logOutAdmin } = adminSlice.actions;
export default adminSlice.reducer;
