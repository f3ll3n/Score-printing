import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import areaSlice from "./slices/textareaSlice";
//ok

export const store = configureStore({
  reducer: { areaSlice },
});

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;