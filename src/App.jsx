import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAll, decrement, increment } from "./slices/counterSlice";

const App = () => {
  const data = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{data}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(clearAll())}>ClearAll</button>
    </div>
  );
};

export default App;
