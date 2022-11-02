import "./styles.css";

import data from "./data";
import List from "./List";

import { useState } from "react";

export default function App() {
  const [food, setFood] = useState(data);
  return (
    <div className="App">
      <h1>Menu List</h1>
      <button onClick={() => setFood(food)}>Show</button>
      <List food={food} />
    </div>
  );
}
