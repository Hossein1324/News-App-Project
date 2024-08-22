import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/TopNews";
import TopNews from "./components/TopNews";

function App() {
  const [category, setCategory] = useState("general");
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    const htmlElement = document.querySelector("html");
    htmlElement.setAttribute("data-bs-theme", darkMode ? "dark" : "light");
  };
  return (
    <>
      <NavBar
        setCategory={setCategory}
        toggleTheme={toggleTheme}
        darkMode={darkMode}
      />
      <TopNews category={category} darkMode={darkMode} />
    </>
  );
}

export default App;
