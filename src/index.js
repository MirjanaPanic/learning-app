import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import List from "./components/Liste";
import DveListe from "./components/DveListe";
import Recepti from "./components/Recepti";
import PureComponent from "./components/PureComponent";
import Poruka from "./components/PropsHandler";
import "bootstrap/dist/css/bootstrap.css"; //ovde ukljucujemo bootstrap

//React ovde u root div u index.html renderuje sve ostalo, sve ove komponente koje se pozivaju u okviru render() funkcije.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode> //duplira
  <>
    <App />
    <List />
    <DveListe />
    <Recepti />
    <PureComponent />
    <Poruka />
  </>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
