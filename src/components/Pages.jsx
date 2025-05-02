import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function Page1() {
  const theme = useContext(ThemeContext); //deca citaju context koji je roditelj postavio, mogu i da ga menjaju

  const styles = {
    padding: "1rem",
    borderRadius: "8px",
    marginBottom: "1rem",
    backgroundColor: theme === "light" ? "#f9f9f9" : "#444",
    color: theme === "light" ? "#000" : "#fff",
  };

  return (
    <div style={styles}>
      <h1> Hello, page 1 have this style</h1>
      <p>
        Trenutna tema je: <strong>{theme}</strong>
      </p>
    </div>
  );
}

export function Page2() {
  //da procita kontekst, da ima isti kao njen parent
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h1> Tema Page2 je: {theme}</h1>
    </div>
  );
}
