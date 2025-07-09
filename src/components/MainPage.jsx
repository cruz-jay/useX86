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
        <span></span> Questions To Test Your Knowledge On x86 Assembly
      </h3>
      <button onClick={handleClick}>
        <span>Let's Start</span>
      </button>
    </div>
  );
};

export default MainPage;
