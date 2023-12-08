export default function App() {
  return(
    <div>
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
  return(
    <div className="add-form">
      <h3>What do you need for your trip</h3>
    </div>
  )
};

function PackingList() {
  return(
    <div className="list">Ready List</div>
  )
};

function Stats() {
  return(
    <footer>
      <em>You have X items on your list, and you already packed x (x%)</em>
    </footer>
  )
};