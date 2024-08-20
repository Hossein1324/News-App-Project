import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiar bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="nav-link">Technology</div>
              </li>
              <li className="nav-item">
                <div className="nav-link">Business</div>
              </li>
              <li className="nav-item">
                <div className="nav-link">Features</div>
              </li>
              <li className="nav-item">
                <div className="nav-link">Features</div>
              </li>
              <li className="nav-item">
                <div className="nav-link">Features</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
