import { createEpicMiddleware } from "redux-observable";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootEpic, rootReducer } from "./features";

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, epicMiddleware),
	devTools: process.env.NODE_ENV !== "production",
});

epicMiddleware.run(rootEpic);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
