//spread operator ...object
//React se trigeruje na promenu reference(adrese), tj kada state promenljiva se veze za novi objekat!
//zato se mora koristiti setState azuriranje, da bi dobio referencu na novi objekat
//React ne primecuje lokalne mutacije(kad se isti objekat, sa iste adrese, menja), to ga ne trigeruje, ne konstantuje jednostavno

import { useState } from "react";

export default function SpreadObj() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  }

  //key - value
  //e.target.name - e.target.value
  //da bi mogli u istom handleru da odradimo azuriranje, da bi znali koje input polje treba promeniti vrednost property-ja
  return (
    <div style={{ backgroundColor: "red" }}>
      <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input name="email" value={person.email} onChange={handleChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </div>
  );
}
