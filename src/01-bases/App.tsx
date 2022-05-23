import "./App.css";
import { CounterBy } from "./bases/CounterBy";
import { Counter } from "./bases/Counter";
import { CounterEffect } from "./bases/CounterEffect";
import { CounterHook } from "./bases/CounterHook";
import { CounterReducerComponent } from "./counter-reducer/CounterReducer";

function App() {
  return (
    <>
      <Counter />
      <CounterBy />
      <CounterEffect />
      <CounterHook />
      <CounterReducerComponent/>
    </>
  );
}

export default App;
