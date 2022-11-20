import { createSlice } from "@reduxjs/toolkit";

export const loggedInShopSlice = createSlice({
  name: "loggedInShop",
  initialState: {
    shopName: "",
    shopId: "",
    shopIconURL: "",
    shopAddress: "",
  },

  reducers: {
    loginShop: (state, action) => {
      state.shopName = action.payload.shopName;
      state.shopId = action.payload.shopId;
      state.shopIconURL = action.payload.iconUrl;
      state.shopAddress = action.payload.sellerAccountAddress;
    },
  },
});

export const { loginShop } = loggedInShopSlice.actions;

export default loggedInShopSlice.reducer;
