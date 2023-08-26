import "./contant.css";

const DetailDiv = () => (
  <>
    <h2>
      Hi, I'm <span className="myName">Muhammad Ahmed</span>
    </h2>
    <p className="detail-pra">
      I was born on February 12th, 2001. I am a skilled web developer with a
      passion for creating efficient and visually appealing websites.
    </p>
  </>
);

const SkillDiv = () => (
  <div class="container">
    <div class="progress2 progress-moved-html">
      <label>
        <h6>HTML and CSS and are capable of creating responsive</h6>
      </label>
      <div class="progress-bar2-html"></div>
    </div>

    <div class="progress2 progress-moved-boot">
      <label>
        <h6>Bootstrap, a popular CSS framework</h6>
      </label>
      <div class="progress-bar2-boot"></div>
    </div>

    <div class="progress2 progress-moved-java">
      <label>
        <h6>JavaScript, a powerful programming language</h6>
      </label>
      <div class="progress-bar2-java"></div>
    </div>

    <div class="progress2 progress-moved-firebase">
      <label>
        <h6>
          Firebase database is one of the most important parts that usually all
          the dynamic apps needed to store the data
        </h6>
      </label>
      <div class="progress-bar2-firebase"></div>
    </div>

    <div class="progress2 progress-moved-react">
      <label>
        <h6>ReactJS is an open-source JavaScript library</h6>
      </label>
      <div class="progress-bar2-react"></div>
    </div>
  </div>
);

const CvButton = () => (
  <div className="button">
    <div className="box"></div>
    <div className="box">R</div>
    <div className="box">E</div>
    <div className="box">S</div>
    <div className="box">U</div>
    <div className="box">M</div>
    <div className="box">E</div>
    <div className="box"></div>
  </div>
);

export { DetailDiv, SkillDiv, CvButton };
