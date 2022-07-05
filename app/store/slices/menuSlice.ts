import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "@app/store";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    isopen: false
    },
  reducers: {
    setMenuStatus: (state, action) => {
      state.isopen = !state.isopen;
    },
  },
});

export const { setMenuStatus } = menuSlice.actions;

export const getMenuStatus = (state: AppState) => state.menu;

export default menuSlice.reducer;
