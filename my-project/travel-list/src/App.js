import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 11, packed: false },

];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    // setItems([...initialItems, item])
    setItems((items) => 
    /*items above is called a callback function, like using the existing array*/
      [...items, item]);
  }

  function handleDeleteItem(id){
    setItems((items)=>items.filter(item=>item.id!==id))
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem}/>
      <Stats />
    </div>
  )
}

function Logo() {
  return (<h1>🌴Far Away🌴</h1>)
}

function Form({ onAddItems }) {

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    if (!description) {
      return;
    }

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now()
    }
    console.log(newItem);
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);

  }

  return (<form className="add-form"
    onSubmit={handleSubmit}> {/* onSubmit also runs on 'enter' button*/}

    <h3>What do you need for your trip?</h3>

    <select name="" id="" value={quantity} onChange={(event) => {
      console.log(event.target.value)
      setQuantity(Number(event.target.value))
    }}>
      {Array.from({ length: 20 }, (_, i) => i + 1)
        .map(num => <option value={num} key={num}>{num}</option>)}
    </select>

    <input type="text" name="" id="" placeholder="Item..." value={description} onChange={(event) => {
      console.log(event.target)
      setDescription(event.target.value)
    }} />

    <button>ADD</button>
  </form>)
}

function PackingList({ items, onDeleteItem }) {
  return (
    <div className="list">
      <ul>
        {items
          .map(item => <Item item={item} key={item.id}  onDeleteItem={()=>onDeleteItem(item.id)}/>)}
      </ul>
    </div>)
}

function Item({ item, onDeleteItem }) {
  return (<li>
    <span style={item.packed
      ? { textDecoration: "line-through" }
      : {}}>{item.quantity} {item.description}</span>
    <button onClick={onDeleteItem}>❌</button>

  </li>)
}

function Stats() {
  return (<footer className="stats">
    🧳 You have X items on your list, and you've already packed X (X%)
  </footer>)
}