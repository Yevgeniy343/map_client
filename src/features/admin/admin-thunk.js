import customFetch from "../../utils/adminAxios";
import { logOutAdmin } from "./adminSlice";

export const loginAdminThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const remindPassThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, info);
    return resp.data;
  } catch (error) {
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const createCategoryThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, info);
    return resp.data;
  } catch (error) {
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
export const createSubCategoryThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, info);
    return resp.data;
  } catch (error) {
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getCategoriesThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.get(url, info);
    return resp.data;
  } catch (error) {
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const createObjectThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, info);
    return resp.data;
  } catch (error) {
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getObjectsThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.get(url, info);
    return resp.data;
  } catch (error) {
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const addInfo_1_Thunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, info);
    return resp.data;
  } catch (error) {
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const addInfo_2_Thunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, info);
    return resp.data;
  } catch (error) {
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const uploadImageThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, info);
    return resp.data;
  } catch (error) {
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
