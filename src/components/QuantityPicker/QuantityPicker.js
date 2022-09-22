import {useState} from "react";

export default function QuantityPicker() {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(function (prevCount) {
        return (prevCount += 1);
      });
    }
  
    const decrement = () => {
      setCount(function (prevCount) {
        if (prevCount > 0) {
          return (prevCount -= 1); 
        } else {
          return (prevCount = 0);
        }
      });
    }
  return (
      <div className="qty">
        <span>Quantity</span>
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
      </div>
    );
}