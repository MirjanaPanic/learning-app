import { useState } from "react";

export default function Update() {
  const initialArray = [
    { id: 1, ime: "Mirjana" },
    { id: 2, ime: "Milos" },
    { id: 3, ime: "Ana" },
    { id: 4, ime: "Mila" },
  ];
  const [imena, setImena] = useState(initialArray);

  //zelim da promenim ime elementa sa id=3
  function handleClick() {
    setImena(
      imena.map((i) => {
        if (i.id === 3) {
          return { ...i, ime: "Pedja" };
        } else {
          return i;
        }
      })
    );
    //console.log(imena); //tek kad se zavrsi handler, moci ce da azurira state, ovde je prethodni render
  }

  return (
    <div style={{ backgroundColor: "lawngreen" }}>
      <button onClick={handleClick}> Promeni </button>
      <ul>
        {imena.map((i) => {
          return <li key={i.id}> {i.ime}</li>;
        })}
      </ul>
    </div>
  );
}
