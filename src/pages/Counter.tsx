// Counter.js
// import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  increment,
  incrementByAmount,
} from "@/redux/features/counter/CounterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
// import { useDispatch } from "react-redux";

const Counter = () => {
  //   const [count, setCount] = useState(0);

  //   const increment = () => setCount((prev) => prev + 1);
  //   const decrement = () => setCount((prev) => prev - 1);
  //   const reset = () => setCount(0);
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state: RootState) => state.counter);

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleIncrementAmt = () => {
    dispatch(incrementByAmount(5));
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1>Simple Counter</h1>
      <h2 style={{ fontSize: "3rem" }}>{value}</h2>
      <div className="flex justify-center gap-2">
        <Button onClick={handleIncrement}>Increment</Button>
        <Button>Decrement</Button>
        <Button onClick={handleIncrementAmt}>IN AMT</Button>
      </div>
    </div>
  );
};
export default Counter;
