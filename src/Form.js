import { useState } from "react";

export default function Form({ addItems }) {

    const [itemName, setItemName ] = useState("");
    const [amount, setAmount] = useState("");
   
    function handleSubmit(e) {
      e.preventDefault();
  
      if (!itemName) return;
  
      const newItem = { itemName, amount, packed: false, id: Date.now()};
  
      addItems(newItem);
  
      setItemName("");
      setAmount(1);
    };
    
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