export const INCREMENT = "INCREMENT";
export const RESET = "RESET";
export const DECREMENT = "DECREMENT";

export const incrementCounter = () => ({
	type: INCREMENT,
});

export const decrementCounter = () => ({
	type: DECREMENT,
});

export const resetCounter = () => ({
	type: RESET,
});
