import useQuizStore from "../store/store";

const MainPage = () => {
  const startQuiz = useQuizStore((state) => state.startQuiz);
  const questions = useQuizStore((state) => state.questions);
  console.log(questions);

  function handleClick() {
    startQuiz();
  }

  return (
    <div>
      <h3>
        <span></span> questions to test your knowledge on
        <span>x86 Assembly</span>
      </h3>
      <button onClick={handleClick}>
        <span>Let's Start</span>
      </button>
    </div>
  );
};

export default MainPage;
