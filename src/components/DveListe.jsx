const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];

function Prikazi({ lista }) {
  const pr = lista.map((el) => (
    <li key={el.id}>
      <p>
        <b>{el.name}:</b>
        {" " + el.profession + " "}
        known for {el.accomplishment}
      </p>
    </li>
  ));
  return pr;
}

export default function DveListe() {
  const lista1 = people.filter((person) => person.profession === "chemist");
  const lista2 = people.filter((person) => person.profession !== "chemist");
  return (
    <article>
      <h1>Scientists</h1>
      <ul>
        <Prikazi lista={lista1} />
        <Prikazi lista={lista2} />
      </ul>
    </article>
  );
}
