import { useTypewriter, Cursor } from "react-simple-typewriter";


const Animation = () => {
  const [text] = useTypewriter({
    words: ['Muhammad Ahmed', 'Web Developer', 'Full Stack Developer'],
    Loop: {},
    typeSpeed : 120,
    deleteSpeed : 80,
  });
  return (
    <h2>
      Hi, I Am {' '}
      <span className="myName">{text}</span>
      <span>
        <Cursor/>
      </span>
    </h2>
  );
};

export default Animation;
