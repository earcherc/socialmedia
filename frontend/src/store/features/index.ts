import { combineReducers } from "@reduxjs/toolkit";
import { combineEpics } from "redux-observable";
import {
	counterDecrementEpic,
	counterIncrementEpic,
	counterResetEpic,
	counterSliceReducer,
} from "./counter";

export const rootEpic = combineEpics(counterDecrementEpic, counterIncrementEpic, counterResetEpic);
export const rootReducer = combineReducers({ counter: counterSliceReducer });
