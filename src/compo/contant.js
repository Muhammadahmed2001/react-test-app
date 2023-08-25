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

const SkillDiv = ()=>(
  <div
  className="progress"
  role="progressbar"
  aria-label="Basic example"
  aria-valuenow={25}
  aria-valuemin={0}
  aria-valuemax={100}
>
  <div className="progress-bar" style={{ width: "25%" }} />
</div>
)

export { DetailDiv ,SkillDiv };
