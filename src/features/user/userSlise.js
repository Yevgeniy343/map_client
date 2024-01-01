import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUserThunk, loginUserThunk, getAllThunk } from "./thunk";
import toast from "react-hot-toast";
import {
  addTokenToLocalStorage,
  addUserToLocalStorage,
  getTokenFromLocalStorage,
  getUserFromLocalStorage,
  removeTokenFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
  token: getTokenFromLocalStorage(),
  isSidebarOpen: false,
  submenuLocation: [],
  pageId: "",
  categories: [],
  subCategories: [],
  objects: [],
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    return registerUserThunk("/auth/signup", user, thunkAPI);
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    return loginUserThunk(`/auth/login/`, user, thunkAPI);
  }
);

export const getAll = createAsyncThunk(
  "user/getAll",
  async (user, thunkAPI) => {
    return getAllThunk(`/auth/getAll/`, user, thunkAPI);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOutUser: (state) => {
      state.user = null;
      state.token = "";
      removeUserFromLocalStorage();
      removeTokenFromLocalStorage();
    },
    sidebarCloseHandler: (state) => {
      state.isSidebarOpen = false;
    },
    sidebarOpenHandler: (state) => {
      state.isSidebarOpen = true;
    },

    pageIdHandler: (state, { payload }) => {
      state.pageId = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });

    // registers
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      const { user, token } = payload;
      state.isLoading = false;
      state.user = user;
      state.token = token;
      addUserToLocalStorage(user);
      addTokenToLocalStorage(token);
      toast.success(`Привет ${user.name} !`);
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // login
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      const { user, token } = payload;
      state.isLoading = false;
      state.user = user;
      state.token = token;
      addUserToLocalStorage(user);
      addTokenToLocalStorage(token);
      toast.success(`Добро пожаловать  ${user.name} !`);
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // getAll
    builder.addCase(getAll.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAll.fulfilled, (state, { payload }) => {
      const { categories, subCategories, objects } = payload;
      state.categories = categories;
      state.subCategories = subCategories;
      state.objects = objects;
      state.isLoading = false;
    });
    builder.addCase(getAll.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
  },
});

export const {
  logOutUser,
  sidebarCloseHandler,
  sidebarOpenHandler,

  pageIdHandler,
} = userSlice.actions;
export default userSlice.reducer;
