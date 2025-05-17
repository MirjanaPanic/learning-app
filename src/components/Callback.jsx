import React, { useEffect, useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  // Funkcija će imati istu referencu sve dok se zavisnosti ne promene
  const fetchData = useCallback(() => {
    console.log("Fetching data...");
  }, []); // ← prazne zavisnosti = ista funkcija uvek

  useEffect(() => {
    console.log("Effect triggered");
    fetchData();
  }, [fetchData]); // Sad se pokreće SAMO jednom

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
