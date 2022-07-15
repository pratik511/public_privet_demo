import { combineReducers } from "redux";
import { UserReducer } from "./Register.reducer";

export const RootReducer = combineReducers({
    user: UserReducer,
})