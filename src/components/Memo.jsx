import React, { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function expensiveCalculation(num) {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {} // simulacija teškog izračuna
    return num * 2;
  }

  const result = useMemo(() => {
    //console.log("enter");
    expensiveCalculation(count); 
  }, [count]);

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <p>Result: {result}</p>
    </div>
  );
}
