import { Fragment, useState } from "react";

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
        {zanimanja.map((z, index) => (
          <li key={index}>{z}</li>
        ))}
      </ul>
    </div>
  );
}

export function ArrayRemove() {
  let todo = [
    { id: 1, task: "prepare breakfast" },
    { id: 2, task: "make a coffee" },
    { id: 3, task: "clean room" },
    { id: 4, task: "study session" },
  ];

  const [tasks, setTasks] = useState(todo); //inicijalizacija stanja, samo pre prvog rendera!

  return (
    <div style={{ backgroundColor: "lavender" }}>
      <h1> To do: </h1>
      <ul>
        {tasks.map((t) => (
          <Fragment key={t.id}>
            <li> {t.task}</li>
            <button
              onClick={() => {
                //imam t.id i t.task dostupno, uhvacen task koji je kliknut i treba da se obrise
                let unfinished = tasks.filter((td) => td.id !== t.id);
                console.log(unfinished);
                setTasks(unfinished);
              }}
            >
              {" "}
              Done!{" "}
            </button>
          </Fragment>
        ))}
      </ul>
    </div>
  );
}
