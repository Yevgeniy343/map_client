import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  registerUserThunk,
  loginUserThunk,
  getAllThunk,
  sendMessageThunk,
} from "./thunk";
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
  messages: [],
  currentSubCategory: [{ _id: "", name: "", imageName: "" }],
  currentObject: "",
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

export const sendMessage = createAsyncThunk(
  "user/createMessage",
  async (user, thunkAPI) => {
    console.log(user);
    return sendMessageThunk(`/auth/createMessage/`, user, thunkAPI);
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
    currentSubCategoryHandler: (state, { payload }) => {
      state.currentSubCategory = payload;
    },
    currentObjectHandler: (state, { payload }) => {
      state.currentObject = payload;
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
      const { categories, subCategories, objects, messages } = payload;
      state.categories = categories;
      state.subCategories = subCategories;
      state.objects = objects;
      state.messages = messages;
      state.isLoading = false;
    });
    builder.addCase(getAll.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // sendMessage
    builder.addCase(sendMessage.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(sendMessage.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.messages.push(payload);
    });
    builder.addCase(sendMessage.rejected, (state, { payload }) => {
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
  currentSubCategoryHandler,
  currentObjectHandler,
} = userSlice.actions;
export default userSlice.reducer;
