import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllThunk, sendMessageThunk } from "./thunk";
import toast from "react-hot-toast";
import {
  removeTokenFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  submenuLocation: [],
  pageId: "",
  categories: [],
  subCategories: [],
  objects: [],
  messages: [],
  currentSubCategory: [{ _id: "", name: "", imageName: "" }],
  currentObject: "",
  isSecondPanel: false,
};

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
    secontPanelHandler: (state, { payload }) => {
      state.isSecondPanel = payload;
    },
  },
  extraReducers: (builder) => {
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
  secontPanelHandler,
} = userSlice.actions;
export default userSlice.reducer;
