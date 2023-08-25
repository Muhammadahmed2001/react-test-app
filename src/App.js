import logo from "./logo.svg";
import "./App.css";
import MainNavbar from "./compo/navbar";
import { DetailDiv, SkillDiv } from "./compo/contant";
import Developer_gif from "./assits/developer-gif.gif";

function App() {
  return (
    <>
      <MainNavbar />
      <div className="main-div container">
        <div> 
          <h2 className="div-heading">About Me</h2>
        </div>
        <div className="d-flex first-div">
          <div className="detail-div">
            <DetailDiv />
          </div>
          <img className="developer-img" src={Developer_gif} alt="" />
        </div>
        <div>
          <h2 className="div-heading">Skill</h2>
        </div>
        <div className="secound-div">
          <div>
            <SkillDiv />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
