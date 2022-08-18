import { createSlice } from "@reduxjs/toolkit";
import { CounterState } from "../../../types/types";
import { Observable } from "rxjs";
import { map, filter, delay } from "rxjs/operators";
import { Action } from "redux";

// export type MyEpic = Epic<AnyAction, AnyAction, RootState>;

const initialState: CounterState = {
	value: 2,
};

//
// Slice/Reducers
//

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment(state) {
			state.value++;
		},
		decrement(state) {
			state.value--;
		},
		reset(state) {
			state.value = 0;
		},
	},
});

//
// Epics
//

export const counterIncrementEpic = (
	action$: Observable<Action>
	// state$: StateObservable<RootState>
) =>
	action$.pipe(
		filter(counterSlice.actions.increment.match),
		delay(500),
		map(() => counterSlice.actions.decrement())
	);

export const counterDecrementEpic = (
	action$: Observable<Action>
	// state$: StateObservable<RootState>
) =>
	action$.pipe(
		filter(counterSlice.actions.decrement.match),
		delay(2000),
		map(() => counterSlice.actions.increment())
	);

export const counterResetEpic = (
	action$: Observable<Action>
	// state$: StateObservable<RootState>
) =>
	action$.pipe(
		filter(counterSlice.actions.reset.match),
		delay(2000),
		map(() => counterSlice.actions.increment())
	);

//
// Exports
//

export const { increment, decrement, reset } = counterSlice.actions;
export const counterSliceReducer = counterSlice.reducer;
