import { useReducer } from "react";
/*
const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
initialTasks – inicijalno se tasks setuje na tu vrednost
poziv dispatch funkcije trigeruje izvrsenje tasksReducer funkcije, koja u sebi sadrzi logiku 
I u zavisnosti od parametara poziva dispatch funkcije, izvrsava kod I returnuje novo stanje koje azurira 
postojece tasks
*/

export default function ReducerTest() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleChangeClick() {
    console.log("Pre: " + tasks);
    dispatch({ type: "change", text: "Studying", id: 1 });
  }

  function handleDeleteClick() {
    console.log("Pre: " + tasks);
    dispatch({ type: "delete", id: 0 });
  }

  return (
    <div style={{ backgroundColor: "beige" }}>
      <button onClick={handleChangeClick}> Change </button>
      <button onClick={handleDeleteClick}> Delete </button>
      <ul>
        {tasks.map((t) => {
          return <li key={t.id}>{t.text}</li>;
        })}
      </ul>
    </div>
  );
}

function tasksReducer(tasks, action) {
  //action objekat iz dispatch poziva parametri
  switch (action.type) {
    case "change": {
      return tasks.map((t) => {
        if (t.id === action.id) {
          return { ...t, text: action.text };
        } else return t;
      });
    }
    case "delete": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      return tasks;
    }
  }
}

const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
