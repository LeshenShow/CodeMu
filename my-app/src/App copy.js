import React from "react";
import { useId, useState } from "react";

function App() {
  const state = useState("prod");
  // const name = state[0];
  // const setName = state[1];
  const [name, setName] = useState("prod");
  const [inCart, setInCart] = useState(false);
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [choice, setChoice] = useState(0);
  let checkCart = () => {
    setInCart(!inCart);
  };
  let clickHandler = () => {
    setName(crypto.randomUUID());
  };
  let counter = () => {
    setCount(count + 1);
  };
  let inputSetter = (event) => {
    setValue(event.target.value);
  };
  let inputSetter2 = (event) => {
    setValue2(event.target.value);
  };
  let selectCity = (event) => {
    setChoice(event.target.value);
  };
  return (
    <div>
      <div>
        <button onClick={clickHandler}>btn</button>
        <span>{name}</span>
      </div>
      <div>
        <button onClick={checkCart}>Cart</button>
        <span>{inCart ? "в корзине" : "не в корзине"}</span>
      </div>
      <div>
        <button onClick={counter}>Cart</button>
        <span>{count}</span>
      </div>
      <div>
        <input value={value} onChange={inputSetter} />
        <p>text:{value}</p>
      </div>
      <div>
        <input value={value2} onChange={inputSetter2} />
        <p>text:{value2}</p>
      </div>
      <div>
        <select value={choice} onChange={selectCity}>
          <option>city1</option>
          <option>city2</option>
          <option>city3</option>
          <option>city4</option>
        </select>
        <p>selected: {choice}</p>
      </div>
    </div>
  );
}
export default App;
