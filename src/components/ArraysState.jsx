import { useState } from "react";

export default function ArrayAdd() {
  const [zanimanja, setZanimanja] = useState([]);
  const [zanimanje, setZanimanje] = useState("");

  function handleChange(e) {
    setZanimanje(e.target.value);
  }

  function handleClick() {
    setZanimanja([...zanimanja, zanimanje]);
  }

  return (
    <div style={{ backgroundColor: "beige" }}>
      <label>Unesi zanimanje:</label>
      <input onChange={handleChange}></input>
      <h1>Uneto je: {zanimanje}</h1>
      <button onClick={handleClick}>Dodaj u listu</button>
      <ul>
        {zanimanja.map((z) => (
          <li key={crypto.randomUUID()}>{z}</li>
        ))}
      </ul>
    </div>
  );
}
