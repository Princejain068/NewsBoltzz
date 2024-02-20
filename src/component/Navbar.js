import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark " >
        <div className="container-fluid">
          <Link className="navbar-brand" to="#"style={{color:'white'}}>
            NewsBoltzz
          </Link>
          <button
            className="navbar-toggler bg-light"
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
              <li className="nav-item " >
                <Link className="nav-link " aria-current="page" to="/" style={{color:'white'}}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/business" style={{color:'white'}}>Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/entertainment" style={{color:'white'}}>Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/health" style={{color:'white'}}>Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/science" style={{color:'white'}}>Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/sports" style={{color:'white'}}>Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/technology" style={{color:'white'}}>Technology</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
