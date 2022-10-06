import React from "react";
import {Link} from "react-router-dom"
export const Navbar = () => {
    return (
      <div>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Navbar
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link
                    to="/"
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/about" class="nav-link" href="#">
                    About
                  </Link>
                </li>

                <li class="nav-item">
                  <Link to="/contact" class="nav-link ">Login</Link>
                </li>
                <li class="nav-item">
                  <Link to="/todo" class="nav-link ">Todo</Link>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>
        {/* <Link to="/contact">Contact</Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/todo">Todo</Link> */}
      </div>
    );
};
