import { useState } from "react";

export default function Form({ onAddItems }) {

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
    // console.log(newItem);
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);

  }

  return (<form className="add-form"
    onSubmit={handleSubmit}> {/* onSubmit also runs on 'enter' button*/}

    <h3>What do you need for your trip?</h3>

    <select name="" id="" value={quantity} onChange={(event) => {
      // console.log(event.target.value)
      setQuantity(Number(event.target.value))
    }}>
      {Array.from({ length: 20 }, (_, i) => i + 1)
        .map(num => <option value={num} key={num}>{num}</option>)}
    </select>

    <input type="text" name="" id="" placeholder="Item..." value={description} onChange={(event) => {
      // console.log(event.target)
      setDescription(event.target.value)
    }} />

    <button>ADD</button>
  </form>)
}