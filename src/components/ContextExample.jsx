import { ThemeContext } from "./ThemeContext";
import { useState } from "react";
import { Page1, Page2 } from "./Pages";

export default function Theme() {
  //const tema=useContext(ThemeContext);
  const [theme, setTheme] = useState("light");

  //wrapuje decu u Context i postavlja context na theme iz stanja. Klik setuje stanje i menja context
  //posto se theme menja na klik, to menja i context i svi potomci koji useContext ce se rerenderovati
  return (
    <ThemeContext.Provider value={theme}>
      <>
        <Page1>
          <Page2 />
        </Page1>
        <button
          onClick={() =>
            setTheme((prev) => (prev === "light" ? "dark" : "light"))
          }
        >
          {" "}
          Toggle theme{" "}
        </button>
      </>
    </ThemeContext.Provider>
  );
}
