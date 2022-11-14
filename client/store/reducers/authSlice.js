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
      state.userEmail = "";
    },
  },
});

export const { logout, signin } = authSlice.actions;

/* @ NOTE that every reducer has an action associated with it .in our case , the authSlice has actions object in  it
that has all the actions for our reducer function. the name of the action  for any reducer always match the name of
 the  reducer function .in our case, logout will have an action called logout, signin will have its own called signin and so on.
 dispatching these actions will trigger the reducers associated with them .
 */

export default authSlice.reducer;
