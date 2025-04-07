const people = [
  { id: 1, name: "Creola Katherine Johnson: mathematician", prof: "mat" },
  { id: 2, name: "Mario José Molina-Pasquel Henríquez: chemist", prof: "che" },
  { id: 3, name: "Mohammad Abdus Salam: physicist", prof: "phy" },
  { id: 4, name: "Percy Lavon Julian: chemist", prof: "che" },
  { id: 5, name: "Subrahmanyan Chandrasekhar: astrophysicist", prof: "ast" },
];

export default function List() {
  const chemists = people.filter((person) => person.prof === "che");

  const listItems = chemists.map((person) => (
    <li key={person.id}>{person.name}</li>
  ));

  return <ul>{listItems}</ul>;
}
