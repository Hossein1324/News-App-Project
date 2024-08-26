import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import TopNews from "./components/TopNews";

function App() {
  const [category, setCategory] = useState("world");
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
