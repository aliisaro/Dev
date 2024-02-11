import React, { useState } from "react";
import "./App.css";
import itemsData from "./data";
import Birthday from "./birthday";

function App() {
  const [items, setItems] = useState(itemsData);

  let number = items.length;

  const handleDeleteItem = (itemId) => {
    setItems([]);
  };

  return (
    <div className="App">
      <h1>{number} Birthdays Today</h1>
      {items.map((item) => (
        <Birthday key={item.id} item={item} />
      ))}
      {items.length > 0 && (
        <button onClick={handleDeleteItem}>Clear All</button>
      )}
    </div>
  );
}

export default App;
