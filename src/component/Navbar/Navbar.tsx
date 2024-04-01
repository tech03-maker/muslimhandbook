// import React from 'react'
import { Fragment } from "react/jsx-runtime";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <Fragment>
      <div>
        <nav className="navbar navbar-expand-sm">
          <div className="container">
            <a className="navbar-brand text-white fw-bold" href="#">
              <img src={logo} alt="logo" />
              <span>Muslim Handbook</span>
            </a>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Qur'an
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Hadith
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Arabic Learning
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Extra
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item fw-bold" href="#">
                        Adhkar
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item fw-bold" href="#">
                        Qiblah Finder
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item fw-bold" href="#">
                        Prayer Times
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex my-2 my-lg-0">
                <button className="btn my-2 my-sm-0" type="submit">
                  Donate
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default Navbar;
