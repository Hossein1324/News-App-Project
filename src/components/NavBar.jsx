import React from "react";
import { IoNewspaper } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
const NavBar = ({ setCategory, toggleTheme, darkMode }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiar">
        <div className="container-fluid d-flex">
          <a className="navbar-brand p-2 flex-fill" href="#">
            {darkMode ? (
              <IoNewspaper size={45} color="black" />
            ) : (
              <IoNewspaper size={45} color="white" />
            )}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav fs-5  flex-fill">
              <li className="nav-item mx-3 px-1">
                <div
                  className="nav-link"
                  role="button"
                  onClick={() => setCategory("world")}
                >
                  World
                </div>
              </li>
              <li className="nav-item mx-3 px-1">
                <div
                  className="nav-link"
                  role="button"
                  onClick={() => setCategory("general")}
                >
                  General
                </div>
              </li>
              <li className="nav-item mx-3 px-1">
                <div
                  className="nav-link"
                  role="button"
                  onClick={() => setCategory("technology")}
                >
                  Technology
                </div>
              </li>
              <li className="nav-item mx-3 px-1">
                <div
                  className="nav-link"
                  role="button"
                  onClick={() => setCategory("business")}
                >
                  Business
                </div>
              </li>

              <li className="nav-item mx-3 px-1">
                <div
                  className="nav-link"
                  role="button"
                  onClick={() => setCategory("sports")}
                >
                  Sports
                </div>
              </li>
              <li className="nav-item mx-3 px-1">
                <div
                  className="nav-link"
                  role="button"
                  onClick={() => setCategory("science")}
                >
                  Science
                </div>
              </li>
              <li className="nav-item mx-3 px-1">
                <div
                  className="nav-link"
                  role="button"
                  onClick={() => setCategory("health")}
                >
                  Health
                </div>
              </li>

              <li className="nav-item mx-3 px-1">
                <div
                  className="nav-link"
                  role="button"
                  onClick={() => setCategory("entertainment")}
                >
                  Entertainment
                </div>
              </li>
            </ul>
            <div className=" flex-fill">
              <button
                className="border-0 rounded-3 px-5 py-2"
                variant="primary"
                onClick={toggleTheme}
              >
                {darkMode ? (
                  <MdLightMode size={20} />
                ) : (
                  <MdDarkMode size={20} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
