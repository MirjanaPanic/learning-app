import { useRef } from "react";

export default function Ref() {
  let ref = useRef(0); //ovo je kao state, azurira se, RAZLIKA: PROMENA REF-A NE TRIGERUJE REACT DA IZVRSI RE-RENDER.

  function handleClick() {
    ref.current = ref.current + 1;
    alert("You clicked " + ref.current + " times!");
  }

  //nece da se menja vrednost dugmeta!! zato sto promena ref-a ne okida re-render
  return <button onClick={handleClick}>Click me! {ref.current}</button>;
}
