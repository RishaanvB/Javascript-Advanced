import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/index"

function App() {
  const counter = useSelector(state => state.counter);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();

  const incrementValue = () => dispatch(increment(10))
  const decrementValue = () => dispatch(decrement())

  return (
    <div className="App">
      <h1>
        Counter: {counter}
      </h1>
      <button onClick={decrementValue}>MINUS</button>
      <button onClick={incrementValue}>PLUS</button>
      <h2>User is : {isLoggedIn ? "logged in" : "logged out"}</h2>
    </div>
  );
}

export default App;
