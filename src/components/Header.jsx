import { Link } from "react-router";
import useQuizStore from "../store/store";

const Header = () => {
  const quizReset = useQuizStore((state) => state.quizReset);
  const restart = () => {
    quizReset();
  };

  return (
    <div>
      <header>
        <div onClick={restart}>
          <div>
            <div>
              <Link to="/">
                <h1>x86 Assembly Quiz</h1>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div />
    </div>
  );
};

export default Header;
