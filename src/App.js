import React from "react";
import List from "./List";
import Data from "./Data";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState(Data);

  const clickHandler = () => {
    setItems([]);
  };
  return (
    <main>
      <section className="container">
        <h3>{items.length} birthdays today </h3>
        <List items={items} />
        <button onClick={clickHandler}>Delete Item</button>
      </section>
    </main>
  );
};

export default App;
