import { useState } from "react";

//klik na dugme ->handler se izvrsava, zapamti se setNumber(0+5) u queue za state-ove koji postoje,
//izvrsi se ceo handler i onda se trigeruje React i on nastupa
//prolazi kroz setere za svoje state-ove, i izvrsava te update, i kada su se state-ovi azurirali
//on poziva funkciju tj komponentu i renderuje je opet(jsx tagovi, JS objekti,virtuelni dom->realni dom, browser iscrtava promene samo)

export default function Batch() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5);
          alert(number);
        }}
      >
        +5
      </button>
    </>
  );
}
