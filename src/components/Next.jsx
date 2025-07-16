import useQuizStore from "../store/store";

const Next = ({ numQuestions }) => {
  const index = useQuizStore((state) => state.index);
  const answer = useQuizStore((state) => state.answer);
  const newQuestionQuiz = useQuizStore((state) => state.newQuestionQuiz);
  const quizFinished = useQuizStore((state) => state.quizFinished);

  function handleNext() {
    newQuestionQuiz();
  }
  function handleFinished() {
    quizFinished();
  }

  if (answer === null) return null;

  const isLastQuestion = index === numQuestions - 1;

  return (
    <div>
      <button
        className="button-a"
        onClick={isLastQuestion ? handleFinished : handleNext}>
        {isLastQuestion ? "Finish Quiz" : "Next Question"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Next;
