import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import MainNavbar from "./compo/navbar";
import {
  DetailDiv,
  SkillDiv,
  CvButton,
  ProjectCardWeather,
  ProjectCardQuiz,
  ProjectCardSearchApp,
  Loading,
} from "./compo/contant";
import Developer_gif from "./assits/developer-gif.gif";
import Cv from "./assits/Online resume-bro.png";
import Loader from "./compo/preLoader";

function App() {
  return (
    <>
      <Loading />
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
        <div>
          <h2 className="div-heading">Resume</h2>
        </div>
        <div className="third-div">
          <div className="cv-img-div">
            <img className="cv-img" src={Cv} alt=""></img>
          </div>
          <div className="cv-btn-div">
            <CvButton />
          </div>
        </div>
        <div>
          <h2 className="div-heading">Projects</h2>
        </div>
        <div className="third-div">
          <div className="project-card">
            <ProjectCardWeather />
            <ProjectCardQuiz />
            <ProjectCardSearchApp />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
