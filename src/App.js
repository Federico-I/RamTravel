import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./Packing List";
import Stats from "./Stats";

/*const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];*/

export default function App() {

  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  };

  function handleDeleteItems(id) {
    setItems((items) => items.filter(item=> item.id !== id));
  };

  function handleCheckedItem(id) {
    setItems((items) => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item)
    );
  };

  function handleClearItems() {
    const confirmed = window.confirm("Are you sure you wnat to delete all items?")
    if (confirmed) setItems([]);
  }

  return(
    <div className="app">
      <Logo />
      <Form addItems={handleAddItems}/>
      <PackingList passItems={items} deleteItem={handleDeleteItems} checkedItem={handleCheckedItem} clearItems={handleClearItems}/>
      <Stats itemsAmount={items}/>
    </div>
  )
};