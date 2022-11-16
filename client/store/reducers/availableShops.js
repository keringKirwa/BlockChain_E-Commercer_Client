import { createSlice } from "@reduxjs/toolkit";

/* This slice is oly called when there is a successful login , not registration. */

/*  [userPassword, loggedInUserEmail, userName]  */

export const authSlice = createSlice({
  name: "user",
  initialState: {
    userName: "",
    userEmail: "",
  },

  reducers: {
    signin: (state, action) => {
      /* TODO: action is just a wrapper on th object that is being send when the signin() function is called  */

      localStorage.setItem("profile", JSON.stringify(action.payload));
      console.log("Payload ++++++====>>>>>", action.payload);

      state.userName = action.payload.loggedInUserName;
      state.userEmail = action.payload.loggedInUserEmail;
    },

    logout: (state) => {
      window.localStorage.removeItem("persist:root");
      state.userName = "";
      state.userId = "";
    },
  },
});

export const { logout, signin } = authSlice.actions;


export default authSlice.reducer;
