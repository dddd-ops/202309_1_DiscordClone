import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispath, RootState } from "./store";
import { useSelector } from "react-redux";

export const useAppDispatch: () => AppDispath = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;