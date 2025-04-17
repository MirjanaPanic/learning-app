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
        {zanimanja.map((z, index) => (
          <li key={index}>{z}</li>
        ))}
      </ul>
    </div>
  );
}

let nextId = 4; //u bazi id autoincrement.. :)
export function ToDoMap() {
  let todo = [
    { id: 0, task: "prepare breakfast", time: "09:00" },
    { id: 1, task: "make a coffee", time: "10:00" },
    { id: 2, task: "clean room", time: "11:00" },
    { id: 3, task: "study session", time: "12:00" },
  ];

  const [tasks, setTasks] = useState(todo); //inicijalizacija stanja, samo pre prvog rendera!
  //novi task
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");

  function convertToMinutes(timeString) {
    // Podeli string na sate i minute
    const [hours, minutes] = timeString.split(":").map(Number);
    // Vrati ukupne minute
    return hours * 60 + minutes;
  }

  function handleAddClick(argument) {
    let nadjen = argument;
    let newTasks = [];
    //u zavisnosti od time umetnuti
    tasks.map((t, index) => {
      if (!nadjen && convertToMinutes(time) < convertToMinutes(t.time)) {
        //od tog indexa pomeriti
        nadjen = true;
        newTasks = [
          ...tasks.slice(0, index),
          { id: nextId++, task: task, time: time },
          ...tasks.slice(index),
        ];
      } else if (!nadjen && index === tasks.length - 1) {
        nadjen = true;

        newTasks = [...tasks, { id: nextId++, task: task, time: time }];
      }
    });
    setTasks(newTasks);
    setTime("");
    setTask("");
  }

  return (
    <div style={{ backgroundColor: "lavender" }}>
      <h1> To do: </h1>
      <h5>
        New task{" "}
        <input value={task} onChange={(e) => setTask(e.target.value)}></input>
        Time:{" "}
        <input value={time} onChange={(e) => setTime(e.target.value)}></input>
        <button onClick={() => handleAddClick(false)}>Add</button>
      </h5>

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            {" "}
            {t.time} {t.task}
            <button
              onClick={() => {
                //imam t.id i t.task dostupno, uhvacen task koji je kliknut i treba da se obrise
                let unfinished = tasks.filter((td) => td.id !== t.id);
                setTasks(unfinished);
              }}
            >
              {" "}
              Done!{" "}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

let nextIdd = 4; //u bazi id autoincrement.. :)
export function ToDoFor() {
  let todo = [
    { id: 0, task: "prepare breakfast", time: "09:00" },
    { id: 1, task: "make a coffee", time: "10:00" },
    { id: 2, task: "clean room", time: "11:00" },
    { id: 3, task: "study session", time: "12:00" },
  ];

  const [tasks, setTasks] = useState(todo); //inicijalizacija stanja, samo pre prvog rendera!
  //novi task
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");

  function convertToMinutes(timeString) {
    // Podeli string na sate i minute
    const [hours, minutes] = timeString.split(":").map(Number);
    // Vrati ukupne minute
    return hours * 60 + minutes;
  }

  function handleAddClick() {
    let nadjen = false;
    let newTasks = [];

    for (let index = 0; index < tasks.length; index++) {
      if (
        !nadjen &&
        convertToMinutes(time) < convertToMinutes(tasks[index].time)
      ) {
        nadjen = true;
        newTasks = [
          ...tasks.slice(0, index),
          { id: nextIdd++, task: task, time: time },
          ...tasks.slice(index),
        ];
        break; // već si ubacio, možeš da izađeš iz petlje
      }
    }
    if (!nadjen) {
      newTasks = [...tasks, { id: nextIdd++, task: task, time: time }];
    }
    setTasks(newTasks);
    setTime("");
    setTask("");
  }

  return (
    <div style={{ backgroundColor: "lavender" }}>
      <h1> To do: </h1>
      <h5>
        New task{" "}
        <input value={task} onChange={(e) => setTask(e.target.value)}></input>
        Time:{" "}
        <input value={time} onChange={(e) => setTime(e.target.value)}></input>
        <button onClick={handleAddClick}>Add</button>
      </h5>

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            {" "}
            {t.time} {t.task}
            <button
              onClick={() => {
                //imam t.id i t.task dostupno, uhvacen task koji je kliknut i treba da se obrise
                let unfinished = tasks.filter((td) => td.id !== t.id);
                setTasks(unfinished);
              }}
            >
              {" "}
              Done!{" "}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
/*kada kliknem na dugme Done!, poziva se handler koji filtrira niz i izbacuje element koji zelim 
da izbacim iz niza. zatim pozivam setState da azuriram stanje. sta se onda desi? trigeruje se react koji kreira virtualni 
dom i koji bi trebalo da samo izbaci tu stavku u svom re-renderu? nece ponovo da izvrsava return deo funkcije? 
da li on izvrsi return deo, vidi kako se formiralo virtuelno dom stablo uporedi s prethodnim i samo 
azurira realni dom tj promena koja je kaze mu i taj delic samo se re-renderuje? */
