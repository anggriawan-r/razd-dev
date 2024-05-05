import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HoverState {
  hoveredType: "square" | "circle" | "nav" | "default" | undefined;
  width: number | undefined;
  height: number | undefined;
  top: number | undefined;
  left: number | undefined;
}

const initialState: HoverState = {
  hoveredType: undefined,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
};

const hoverSlice = createSlice({
  name: "hover",
  initialState,
  reducers: {
    squareHovered: (
      state: HoverState,
      action: PayloadAction<HTMLElement | SVGSVGElement | null>,
    ) => {
      state.hoveredType = action.payload ? "square" : undefined;
      state.height = action.payload?.clientHeight;
      state.width = action.payload?.clientWidth;
      state.top = action.payload?.getBoundingClientRect().top;
      state.left = action.payload?.getBoundingClientRect().left;
    },
    circleHovered: (
      state: HoverState,
      action: PayloadAction<HTMLElement | SVGSVGElement | null>,
    ) => {
      state.hoveredType = action.payload ? "circle" : undefined;
      state.height = action.payload?.clientHeight;
      state.width = action.payload?.clientWidth;
      state.top = action.payload?.getBoundingClientRect().top;
      state.left = action.payload?.getBoundingClientRect().left;
    },
    navHovered: (
      state: HoverState,
      action: PayloadAction<HTMLElement | SVGSVGElement | null>,
    ) => {
      state.hoveredType = action.payload ? "nav" : undefined;
      state.height = action.payload?.clientHeight;
      state.width = action.payload?.clientWidth;
      state.top = action.payload?.getBoundingClientRect().top;
      state.left = action.payload?.getBoundingClientRect().left;
    },
  },
});

export const { squareHovered, circleHovered, navHovered } = hoverSlice.actions;
export default hoverSlice.reducer;
