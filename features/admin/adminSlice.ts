import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IInitialState {
  isCollapseSider: boolean;
}

const initialState: IInitialState = {
  isCollapseSider: false,
};

export const globalSlice = createSlice({
  name: "adminSlice",
  initialState,
  reducers: {
    SetIsCollapseSider: (state, { payload }) => {
      state.isCollapseSider = payload;
    },
  },
});

export const { SetIsCollapseSider } = globalSlice.actions;

export default globalSlice.reducer;
