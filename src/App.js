import "./styles.css";

import data from "./data";
import List from "./List";

import { useState } from "react";

export default function App() {
  const [food, setFood] = useState(data);

  const removeFood = (id) => {
    const newFood = food.filter((food) => food.id !== id)
    setFood(newFood)
  }

  return (
    <div className="App">
      <h1>Menu List</h1>
      <button onClick={() => setFood(food)}>Show</button>
      <List food={food} removeFood={removeFood}/>
    </div>
  );
}
