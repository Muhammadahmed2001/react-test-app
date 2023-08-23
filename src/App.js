import logo from "./logo.svg";
import "./App.css";
import MainNavbar from "./compo/navbar";
import { DetailDiv } from "./compo/contant";
import  Developer_gif  from "./assits/developer-gif.gif";

function App() {
  return (
    <>
      <MainNavbar />
      <div className="main-div container">
        <div className="d-flex first-div">
          <div className="detail-div">
            <DetailDiv />
          </div>
          <img className="developer-img" src={Developer_gif} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
