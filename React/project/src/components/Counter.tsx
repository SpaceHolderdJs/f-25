import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);
  const [isCounterEnabled, setIsCounterEnabled] = useState<boolean>(true);

  console.log(counter);

  const onClickButton = (isIncrement: boolean) => {
    setCounter(isIncrement ? counter + 1 : counter - 1);
  };

  const toggleCounterAvailability = () =>
    setIsCounterEnabled(!isCounterEnabled);

  return (
    <div className="counter">
      <button onClick={toggleCounterAvailability}>
        {isCounterEnabled ? "Hide" : "Show"} counter
      </button>

      {isCounterEnabled && (
        <h1>
          Counter: <span>{counter}</span>
        </h1>
      )}

      {counter < 10 && <button onClick={() => onClickButton(true)}>+</button>}

      <button onClick={() => onClickButton(false)}>-</button>
    </div>
  );
};
