import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css"; //ovde ukljucujemo bootstrap
import List from "./components/Liste";
import DveListe from "./components/DveListe";
import Recepti from "./components/Recepti";
import PureComponent from "./components/PureComponent";
import Poruka from "./components/PropsHandler";
import FormReload, { PreventFormReload } from "./components/DefaultBrowser";
import Stanja from "./components/Stanja";
import Forma from "./components/Forma";
import Snap from "./components/Snapshot";
import Batch from "./components/Batching";
import Snap2 from "./components/Snap";
import FuncSet from "./components/FunctionalSet";
import SpreadObj from "./components/ObjectsState";
import Immer from "./components/Immer";
import ArrayAdd, { ToDoFor, ToDoMap } from "./components/ArraysState";
import Update from "./components/ArrayUpdate";
//import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import Thinking from "./components/Thinking";
import ReducerTest from "./components/ReducerExample";
import Theme from "./components/ContextExample";
import Ref from "./components/Ref";

//React ovde u root div u index.html renderuje sve ostalo, sve ove komponente koje se pozivaju u okviru render() funkcije.
//INITIAL RENDER
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

    <FormReload />
    <PreventFormReload />

    <Stanja />
    <Forma />
    <Snap />
    <Batch />
    <Snap2 />
    <FuncSet />
    <SpreadObj />
    <Immer />
    <ArrayAdd />
    <ToDoMap />
    <ToDoFor />
    <Update />

    <HomePage />
    <Thinking />
    <ReducerTest />
    <Theme />
    <Ref />
  </>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
