import React from "react";
import { IoNewspaper } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
const NavBar = ({ setCategory, toggleTheme, darkMode }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiar">
        <div className="container-fluid d-flex">
          <div className=" flex-fill">
            {darkMode ? (
              <button
                className="btn btn-dark rounded-3 px-5 py-2"
                variant="primary"
                onClick={toggleTheme}
              >
                <MdLightMode size={25} />
              </button>
            ) : (
              <button
                className="btn btn-primary rounded-3 px-5 py-2"
                variant="primary"
                onClick={toggleTheme}
              >
                <MdDarkMode size={25} />
              </button>
            )}
          </div>

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
            <ul className="navbar-nav fs-4  flex-fill">
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
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
