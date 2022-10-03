import{useDispatch} from "react-redux";
import {TypedUseSelectorHook} from "react-redux/es/types"
import{useSelector} from "react-redux/es/exports"
import { AppDispatch, RootState } from ".";
export const  useAppDispatch: ()=> AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState>= useSelector; 
