import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import './navbar.css';


function BrandExample() {
  return (
    <>
      <Navbar className="navbar">
        <h2>hello World</h2>
        <div className="NavItem">
        <a >home</a>
        <a>about</a>
        <a>skills</a>
        <button className="contact-btn"><a>Contact</a></button>
        </div>
      </Navbar>
    </>
  );
}

export default BrandExample;
