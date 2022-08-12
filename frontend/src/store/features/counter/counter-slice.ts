import { CounterState } from "../../../types/types";

const initialState: CounterState = {
  value: 0,
};

export function counterReducer(state: CounterState = initialState, action: any) {
  switch (action.type) {
    case "counter/incremenet": {
      return {
        ...state,
        value: state.value + 1,
      };
    }
    case "counter/decrement": {
      return {
        ...state,
        value: state.value - 1,
      };
    }
    case "counter/reset": {
      return {
        ...state,
        value: 0,
      };
    }

    default:
      return state;
  }
}
