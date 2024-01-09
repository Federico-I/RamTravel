import { useState } from "react";
import Item from "./Item";

export default function PackingList({ passItems, deleteItem, checkedItem, clearItems }) {

    const [sortItems, setSortItems] = useState("packed");
  
    let sortedItems;
  
    if (sortItems === "input") sortedItems = passItems;
    if (sortItems === "description") sortedItems = passItems.slice().sort((a,b) => a.description.localCompare(b.description));
    if (sortItems === "packed") sortedItems = passItems.slice().sort((a,b) => Number(a.packed) - Number(b.packed));
  
  
    return(
      <div className="list">
        <ul>
          {sortedItems.map((item)=> (
            <Item item={item} key={item.id} deleteItem={deleteItem} checkedItem={checkedItem}/>
          ))}
        </ul>
  
        <div className="actions">
          <select value={sortItems} onChange={(e) => setSortItems(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button onClick={clearItems}>Clear List</button>
        </div>
      </div>
    )
  };