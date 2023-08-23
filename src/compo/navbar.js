import { Button } from "bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import './navbar.css';


function BrandExample() {
  return (
    <>
  <nav className="navbar">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <span>{"<"}</span>
      <span> Muhammad Ahmed </span>
      <span>{"/>"}</span>
    </a>
    <div>
    <button className="btn nav-btn ">Skill</button>
    <button className="btn nav-btn">Contact</button>
    <button className="btn nav-btn">Porfolio</button>
    </div>
  </div>
</nav>
    </>
  );
}

export default BrandExample;
