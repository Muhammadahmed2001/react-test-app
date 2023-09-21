import { useTypewriter, Cursor } from "react-simple-typewriter";


const Animation = () => {
  const [text] = useTypewriter({
    words: ['Web Developer', 'Full Stack Developer','Muhammad Ahmed'],
    Loop: {},
    typeSpeed : 200,
    deleteSpeed : 150,
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
