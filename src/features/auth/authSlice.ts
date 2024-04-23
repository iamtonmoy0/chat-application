import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      console.log(action.payload);
      state.accessToken = action.payload.token;
      state.user = action.payload.user;
    },
    userLoggedOut: (state) => {
      state.accessToken = null;
      state.user = {};
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
