import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginAdminThunk,
  remindPassThunk,
  createCategoryThunk,
  getCategoriesThunk,
} from "./admin-thunk";
import toast from "react-hot-toast";
import {
  addAdminToLocalStorage,
  removeAdminFromLocalStorage,
  getAdminFromLocalStorage,
  addAdminTokenToLocalStorage,
  removeAdminTokenFromLocalStorage,
  getAdminTokenFromLocalStorage,
} from "../../utils/localStorage";

const initialState = {
  isLoading: false,
  admin: getAdminFromLocalStorage(),
  token: getAdminTokenFromLocalStorage(),
  isSidebarOpen: false,
  categories: [],
  currentCategory: [{ id: "", name: "" }],
};

export const loginAdmin = createAsyncThunk(
  "admin/loginAdmin",
  async (admin, thunkAPI) => {
    return loginAdminThunk(`/auth_admin/login/`, admin, thunkAPI);
  }
);

export const remindPass = createAsyncThunk(
  "admin/remindPass",
  async (info, thunkAPI) => {
    return remindPassThunk(`/auth_admin/remind_pass/`, info, thunkAPI);
  }
);

export const createCategory = createAsyncThunk(
  "admin/createCategory",
  async (info, thunkAPI) => {
    return createCategoryThunk(`/admin/create_category/`, info, thunkAPI);
  }
);

export const getCategories = createAsyncThunk(
  "admin/get_categories",
  async (info, thunkAPI) => {
    return getCategoriesThunk(`/admin/get_categories/`, info, thunkAPI);
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    logOutAdmin: (state) => {
      state.admin = null;
      state.categories = [];
      state.currentCategory = [{ id: "", name: "" }];
      removeAdminFromLocalStorage();
      removeAdminTokenFromLocalStorage();
      toast.success(`Пока !`);
    },
    sidebarCloseHandler: (state) => {
      state.isSidebarOpen = false;
    },
    sidebarOpenHandler: (state) => {
      state.isSidebarOpen = true;
    },
    currentCategoryHandler: (state, { payload }) => {
      state.currentCategory = payload;
    },
  },
  extraReducers: (builder) => {
    // loginAdmin
    builder.addCase(loginAdmin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginAdmin.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      const { admin, token } = payload;
      state.admin = admin;
      console.log(payload);
      addAdminToLocalStorage(admin);
      addAdminTokenToLocalStorage(token);
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
      state.categories.push(payload);
      toast.success(`Категория создана `);
    });
    builder.addCase(createCategory.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // getCategories
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.categories = payload;
    });
    builder.addCase(getCategories.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
  },
});

export const {
  logOutAdmin,
  sidebarOpenHandler,
  sidebarCloseHandler,
  currentCategoryHandler,
} = adminSlice.actions;
export default adminSlice.reducer;
