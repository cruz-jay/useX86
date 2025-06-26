import useQuizStore from "../store/store";

const ProgressBar = ({ numQuestions, maxPoints }) => {
  const index = useQuizStore((state) => state.index);
  const points = useQuizStore((state) => state.points);

  const progress = ((index + 1) / numQuestions) * 100;
  const scorePercent = (points / maxPoints) * 100;

  // const questions = useQuizStore((state) => state.questions);

  return (
    <div>
      <div>
        <span>
          Question {index + 1}/{numQuestions}
        </span>
        <span>
          Points: {points}/{maxPoints} ({Math.round(scorePercent)}%)
        </span>
      </div>

      <div>
        <div style={{ width: `${progress}%` }}>
          <div />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
