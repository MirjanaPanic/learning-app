//Ovo je super korisno kada želiš da imaš zajednički izgled za sve stranice – kao što su header, footer, sidebar itd.

//children prop
export default function Layout({ children }) {
  return (
    <div style={{ padding: "20px" }}>
      <header style={{ backgroundColor: "#eee", padding: "10px" }}>
        <h2>🧭 Ovo je Header</h2>
      </header>

      <main style={{ minHeight: "200px", margin: "20px 0" }}>{children}</main>

      <footer style={{ backgroundColor: "#eee", padding: "10px" }}>
        <h2>📫 Ovo je Footer</h2>
      </footer>
    </div>
  );
}
