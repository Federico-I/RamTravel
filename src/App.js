const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  return(
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
};

function Logo() {
  return (
    <dib>Ram Travel</dib>
  )
};

function Form() {

  function handleSubmit() {}

  return(
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip</h3>
      <select>
        {Array.from({ lenght: 20 }, (_, i) => i + 1).map((num)=> <option value={num} key={num}>{num}</option>)}
      </select>
      <input type="type" placeholder="Item..." />
      <button>Add</button>
    </form>
  )
};

function PackingList() {
  return(
    <div className="list">
      <ul>
        {initialItems.map((item)=> (
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