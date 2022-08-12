import { combineReducers } from "redux";
import { counterReducer } from "./features/counter/counter-slice";

const rootReducer = combineReducers({ counterReducer });

export default rootReducer;
