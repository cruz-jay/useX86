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
      <h3 className="font-bold pt-5 ">
        Questions To Test Your Knowledge On x86 Assembly
      </h3>
      <div className="pt-5">
        <button className="button-a" onClick={handleClick}>
          <span>Let's Start</span>
        </button>
      </div>
    </div>
  );
};

export default MainPage;
