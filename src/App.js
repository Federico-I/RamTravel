import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {

  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return(
    <div className="app">
      <Logo />
      <Form addItems={handleAddItems}/>
      <PackingList passItems={items}/>
      <Stats />
    </div>
  )
};

function Logo() {
  return (
    <dib>Ram Travel</dib>
  )
};

function Form({ addItems }) {

  const [itemName, setItemName ] = useState("");
  const [amount, setAmount] = useState("");
 
  function handleSubmit(e) {
    e.preventDefault();

    if (!itemName) return;

    const newItem = { itemName, amount, packed: false, id: Date.now()};

    addItems(newItem);

    setItemName("");
    setAmount(1);
  }
  
  return(
    <form className="add-form" onSubmit={handleSubmit}>
      {/* Two different ways to prevent the page from deafult reload on submittion. 
        1) - By handling event on a funtion as is shown above or inline
        2) - Inline - Ex: <form className="add-form" onSubmit={(e)=> handleSubmit(e)}
      */}
      <h3>What do you need for your trip</h3>
      <select value={amount} onChange={(e)=> setAmount(Number(e.target.value ))}>
        {Array.from({ lenght: 20 }, (_, i) => i + 1).map((num)=> <option value={num} key={num}>{num}</option>)}
      </select>
      <input type="type" placeholder="Item..." value={itemName} onChange={(e)=> setItemName(e.target.value)}/>
      <button>Add</button>
    </form>
  )
};

function PackingList({ passItems }) {
  return(
    <div className="list">
      <ul>
        {passItems.map((item)=> (
          <Item item={item} key={item.id}/>
        ))}
      </ul>
    </div>
  )
};

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? {textDecoration:"line-through"}: {}}>
        {""}{item.quantity}{item.description}
      </span>
      <button>&times;</button>
    </li>
  )
}



function Stats() {
  return(
    <footer>
      <em>You have X items on your list, and you already packed x (x%)</em>
    </footer>
  )
};