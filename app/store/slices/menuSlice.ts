import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "@app/store";

type stateType = {
  isopen?: boolean,
  selected?: string,
}

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    isopen: false,
    selected: "dashboard"
  },
  reducers: {
    setMenuStatus: (state, action) => {
      state.isopen = !state.isopen;
    },
    setSelected: (state, { payload }) => {
      state.selected = payload;      
    }
  },
});

export const { setMenuStatus, setSelected } = menuSlice.actions;

export const getMenuStatus = (state: AppState) => state.menu;
export const getSelected = (state: AppState) => state.menu;

export default menuSlice.reducer;
