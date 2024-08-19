import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/TopNews";
import TopNews from "./components/TopNews";

function App() {
  return (
    <>
      <NavBar />
      <TopNews />
    </>
  );
}

export default App;
