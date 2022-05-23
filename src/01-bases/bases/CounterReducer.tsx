import { useReducer } from "react";

interface Props {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

type CounterAction =
  | {
      type: "increaseBy";
      payload: { value: number };
    }
  | { type: "reset" };

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "increaseBy":
      return {
        counter: state.counter + action.payload?.value,
        previous: state.counter,
        changes: state.changes + 1,
      };
    case "reset":
      return { counter: 0, previous: 0, changes: 0 };
    default:
      return state;
  }
};

export const CounterReducerComponent = ({ initialValue = 5 }: Props) => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);
  const handleReset = () => {
    dispatch({ type: "reset" });
  };
  const increaseBy = (value: number) => {
    dispatch({ type: "increaseBy", payload: { value } });
  };
  return (
    <>
      <h1>Counter Reducer: {counterState.counter}</h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>
      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
