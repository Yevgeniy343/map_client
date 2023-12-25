import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginAdminThunk,
  createCategoryThunk,
  getCategoriesThunk,
  createSubCategoryThunk,
  createObjectThunk,
  getObjectsThunk,
  addInfo_1_Thunk,
  addInfo_2_Thunk,
  uploadImageThunk,
} from "./admin-thunk";
import toast from "react-hot-toast";
import {
  addAdminToLocalStorage,
  removeAdminFromLocalStorage,
  getAdminFromLocalStorage,
  addAdminTokenToLocalStorage,
  removeAdminTokenFromLocalStorage,
  // getAdminTokenFromLocalStorage,
} from "../../utils/localStorage";

const initialState = {
  isLoading: false,
  admin: getAdminFromLocalStorage(),
  // token: getAdminTokenFromLocalStorage(),
  isSidebarOpen: false,
  categories: [],
  subCategories: [],
  currentCategory: [{ id: "", name: "" }],
  objects: [],
};

export const loginAdmin = createAsyncThunk(
  "admin/loginAdmin",
  async (admin, thunkAPI) => {
    return loginAdminThunk(`/auth_admin/login/`, admin, thunkAPI);
  }
);

export const createCategory = createAsyncThunk(
  "admin/createCategory",
  async (info, thunkAPI) => {
    return createCategoryThunk(`/admin/create_category/`, info, thunkAPI);
  }
);
export const createSubCategory = createAsyncThunk(
  "admin/createSubCategory",
  async (info, thunkAPI) => {
    return createSubCategoryThunk(`/admin/create_subcategory/`, info, thunkAPI);
  }
);

export const getCategories = createAsyncThunk(
  "admin/get_categories",
  async (info, thunkAPI) => {
    return getCategoriesThunk(`/admin/get_categories/`, info, thunkAPI);
  }
);

export const createObject = createAsyncThunk(
  "admin/createObject",
  async (info, thunkAPI) => {
    return createObjectThunk(`/admin/create_object/`, info, thunkAPI);
  }
);

export const getObjects = createAsyncThunk(
  "admin/getObject",
  async (info, thunkAPI) => {
    return getObjectsThunk(`/admin/get_objects/`, info, thunkAPI);
  }
);

export const addInfo1 = createAsyncThunk(
  "admin/addInfo1",
  async (info, thunkAPI) => {
    return addInfo_1_Thunk(`/admin/addInfo1/`, info, thunkAPI);
  }
);

export const addInfo2 = createAsyncThunk(
  "admin/addInfo2",
  async (info, thunkAPI) => {
    return addInfo_2_Thunk(`/admin/addInfo2/`, info, thunkAPI);
  }
);

export const uploadImage = createAsyncThunk(
  "admin/uploadimage",
  async (info, thunkAPI) => {
    console.log(info);
    return uploadImageThunk(`/admin/uploadImage/`, info, thunkAPI);
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

    // createSubCategory
    builder.addCase(createSubCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createSubCategory.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.subCategories.push(payload);
      toast.success(`Подкатегория создана `);
    });
    builder.addCase(createSubCategory.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // getCategories
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.categories = payload.categories;
      state.subCategories = payload.subCategories;
    });
    builder.addCase(getCategories.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // createObject
    builder.addCase(createObject.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createObject.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.objects.push(payload);
    });
    builder.addCase(createObject.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // getObjects
    builder.addCase(getObjects.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getObjects.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.objects = payload;
    });
    builder.addCase(getObjects.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // addInfo1
    builder.addCase(addInfo1.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addInfo1.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.objects = payload;
    });
    builder.addCase(addInfo1.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // addInfo2
    builder.addCase(addInfo2.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addInfo2.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.objects = payload;
    });
    builder.addCase(addInfo2.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // uploadImage
    builder.addCase(uploadImage.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(uploadImage.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.objects = payload;
    });
    builder.addCase(uploadImage.rejected, (state, { payload }) => {
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
