import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HoverState {
  ref: any;
  width: number | undefined;
  height: number | undefined;
  top: number | undefined;
  left: number | undefined;
}

const initialState: HoverState = {
  ref: null,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
};

const hoverSlice = createSlice({
  name: "hover",
  initialState,
  reducers: {
    isHovered: (
      state: HoverState,
      action: PayloadAction<HTMLElement | null>,
    ) => {
      state.ref = action.payload;
      state.height = action.payload?.clientHeight;
      state.width = action.payload?.clientWidth;
      state.top = action.payload?.getBoundingClientRect().top;
      state.left = action.payload?.getBoundingClientRect().left;
    },
  },
});

export const { isHovered } = hoverSlice.actions;
export default hoverSlice.reducer;
