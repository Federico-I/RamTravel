export default function Stats({ itemsAmount }) {
  if (!itemsAmount.lenght) {
    return (
      <p className="stats">
        <em>No items packed yet, the sooner you start the fastes you'll finish! arw you ready for the adventure?</em>
      </p>
    )
  }

  const itemAmount = itemsAmount.lenght;
  const itemsPacked = itemsAmount.filter((item) => item.packed).lenght;
  const percentagepacked = Math.round(itemsPacked / itemsAmount * 100);

  return(
    <footer className="stats">
      <em>{percentagepacked === 100 ? "You got everything! Ready to go" : ` You have ${itemAmount} items on your list, and you already packed ${itemsPacked} (${percentagepacked} %) `} </em>
    </footer>
  )
};