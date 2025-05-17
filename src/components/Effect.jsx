import { useEffect, useState } from "react";

export default function Effect() {
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow(!show)}> Change show</button>
      {show && <EffectChild></EffectChild>}
    </>
  );
}

export function EffectChild() {
  const [user, setUser] = useState("milos");

  useEffect(() => {
    console.log("welcome" + user);

    return () => console.log("cao" + user);
  }, [user]);

  return (
    <div>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <h1> LALA </h1>
    </div>
  );
}
