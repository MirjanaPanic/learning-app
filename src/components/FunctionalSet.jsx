//razlika izmedju funkcionalnog azuriranja stanja i obicnog.
//funkcionalni uzima iz queue update-a poslednju azuriranu vrednost stanja
//obicno azuriranje uzima vrednost stanja iz prethodnog snapshot-a
import { useState } from "react";

export default function FuncSet() {
  const [number, setNumber] = useState(0);
  //0+5=5, 5+1=6
  function handleClick1() {
    setNumber(number + 5);
    setNumber((n) => n + 1);
  }
  //0+1=1, 0+5=5
  function handleClick2() {
    setNumber((n) => n + 1);
    setNumber(number + 5);
  }
  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleClick1}> Scenario 1</button>
      <button onClick={handleClick2}> Scenario 2</button>
      <button onClick={() => setNumber(0)}>Reset</button>
    </>
  );
}
