import useQuizStore from "../store/store";

const Finished = ({ maxPoints }) => {
  const points = useQuizStore((state) => state.points);
  const quizReset = useQuizStore((state) => state.quizReset);

  const percent = Math.ceil((points / maxPoints) * 100);
  const { message } = getScoreDetails(percent);

  function redo() {
    quizReset();
  }

  return (
    <div>
      <div>
        <h2>Quiz Complete!</h2>
        <div>{percent}%</div>
        <p>
          You scored {points} out of {maxPoints} points
        </p>
        <p>{message}</p>
      </div>
      <div>
        <button className="button-a" onClick={redo}>
          Try Again
        </button>
      </div>
    </div>
  );
};

function getScoreDetails(percent) {
  if (percent >= 90) {
    return {
      message: "Outstanding! You're an x86 Assembly expert!",
    };
  } else if (percent >= 70) {
    return {
      message: "Great job! You have solid knowledge!",
    };
  } else if (percent >= 50) {
    return {
      message: "Good effort! Keep practicing!",
    };
  } else {
    return {
      message: "Keep learning! You'll get better!",
    };
  }
}

export default Finished;
