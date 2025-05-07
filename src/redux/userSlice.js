import { createSlice } from "@reduxjs/toolkit";

const userFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  user: userFromStorage,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    logoutUser(state) {
      state.user = null;
      localStorage.removeItem("user"); 
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
