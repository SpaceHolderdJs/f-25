import React, { useContext, useState, Dispatch, FC } from "react";
import { MainContext } from "../contexts/MainContext";

interface PropsInterface {
  value: string;
  name: string;
  age: number;
  arr: number[];
  abc: number;
  setA: Dispatch<number>
  fn: () => void;
}

export const Counter: FC<PropsInterface> = (props: PropsInterface) => {
  console.log(props.value, props.name, props.age, props.arr, props.abc, props.setA);

  props.fn();

  const {renderPosts} = useContext(MainContext)!;
 
  const [counter, setCounter] = useState<number>(0);
  const [isCounterEnabled, setIsCounterEnabled] = useState<boolean>(true);
  const [name, setName] = useState<string>("name");

  const names: string[] = ["name1", "name2", "name3", "Igor"];

  console.log(counter);

  const onClickButton = (isIncrement: boolean) => {
    setCounter(isIncrement ? counter + 1 : counter - 1);
  };

  const toggleCounterAvailability = () =>
    setIsCounterEnabled(!isCounterEnabled);

  const changeName = (newName: string) => setName(newName);

  return (
    <div className="counter">
      <h3>{name} {props.age}</h3>
      <div>
        {names.map((name, i) => (
          <button key={`${name}-${i}`} onClick={() => changeName(name)}>
            {name}
          </button>
        ))}
      </div>
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

      {renderPosts()}
    </div>
  );
};
