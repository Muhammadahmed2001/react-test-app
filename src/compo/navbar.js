import { Button } from "bootstrap";
import Container from "react-bootstrap/Container";
import BrandExample from "react-bootstrap/Navbar";
import "./navbar.css";

function MainNavbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span>{"<"}</span>
          <span>MUHAMMAD AHMED</span>
          <span>{"/>"}</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon " />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              About
            </a>
            <a className="nav-link" href="#">
              Projects
            </a>
            <a className="nav-link" href="#">
              Skills
            </a>
            <a className="nav-link" href="#">
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;
