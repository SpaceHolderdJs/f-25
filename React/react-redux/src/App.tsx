import { useDispatch, useSelector } from 'react-redux';
import { ReduxStoreType } from './redux/types';
import './App.css';
import { Todos } from './components/Todos';


function App() {
  const counter = useSelector((store: {counter: number}) => store.counter);
  const dispatch = useDispatch(); // store update

  // Напишіть логіку по зменшенню counter на 1 

  const increment = () => dispatch({ type: "INCREMENT_COUNTER" });
  const decrement = () => dispatch({ type: "DECREMENT_COUNTER" });
  const update = (newCounter: number) => dispatch({ type: "UPDATE_COUNTER", payload: newCounter });

  return (
   <div>
    <h1>Hello Redux {counter}</h1>
    <button onClick={() => increment()}>Increment</button>
    <button onClick={() => decrement()}>Decrement</button>

    <p>
      {[10, 20, 30].map((n) => <button key={n} onClick={() => update(n)}>counter = {n}</button>)}
    </p>

    <Todos />

   </div>
  );
}

export default App;
