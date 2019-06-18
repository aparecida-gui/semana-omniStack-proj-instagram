import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Routes from "./routes";

function App() {
  return (
    <section className="page-app">
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </section>
  );
}

export default App;