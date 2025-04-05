//CHILD component - rendering inside its parent component
export function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

//PARENT component
export default function Gallery() {
  return (
    <section>
      <h1> Pictures: </h1>
      <Profile />
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

//Samo jedan export dozvoljen unutar jednog modula.
