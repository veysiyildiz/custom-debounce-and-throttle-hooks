import { useState } from "react";
import { useDebounce, useThrottle } from "./hooks";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    throttledIncrement(count + 1);
  };

  const throttledIncrement = useThrottle((count: number) => {
    setCount(count);
  });

  return (
    <div className="App">
      <p>Debounced input: {debouncedValue}</p>
      <input value={value} onChange={handleChange} />
      <p>Throttled Button</p>
      <button onClick={handleClick}>count is {count}</button>
    </div>
  );
}

export default App;
