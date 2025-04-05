//CHILD component - rendering inside its parent component
/*export function Profile({ opis, name = "Milos" }) {
  console.log({ opis }, { name });
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt={opis} />;
}
*/
export function Profile(props) {
  console.log(props);
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt={props.name} />;
}

//PARENT component
export default function Gallery() {
  const alts = ["profil1", "profil2", "profil3", "profil4"];

  return (
    <section>
      <h1> Pictures: </h1>
      <Profile opis={alts[0]} name="Mirjana" />
      <Profile opis={alts[1]} />
      <Profile opis={alts[2]} />
      <Profile opis={alts[3]} />
    </section>
  );
}

//Samo jedan export dozvoljen unutar jednog modula.
