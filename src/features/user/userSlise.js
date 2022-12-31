import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
});

// export const {} = userSlice.actions;
export default userSlice.reducer;
