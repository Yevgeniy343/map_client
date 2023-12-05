import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginAdminThunk,
  remindPassThunk,
  createCategoryThunk,
} from "./admin-thunk";
import toast from "react-hot-toast";
import {
  addAdminToLocalStorage,
  removeAdminFromLocalStorage,
  getAdminFromLocalStorage,
} from "../../utils/localStorage";

const initialState = {
  isLoading: false,
  admin: getAdminFromLocalStorage(),
  isSidebarOpen: false,
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

export const createCategory = createAsyncThunk(
  "admin/createCategory",
  async (info, thunkAPI) => {
    return createCategoryThunk(`/admin/create_category/`, info, thunkAPI);
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
    sidebarCloseHandler: (state) => {
      state.isSidebarOpen = false;
    },
    sidebarOpenHandler: (state) => {
      state.isSidebarOpen = true;
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

    // createCategory
    builder.addCase(createCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createCategory.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      toast.success(`Категория создана `);
    });
    builder.addCase(createCategory.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
  },
});

export const { logOutAdmin, sidebarOpenHandler, sidebarCloseHandler } =
  adminSlice.actions;
export default adminSlice.reducer;
