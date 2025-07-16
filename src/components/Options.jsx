import { useState } from "react";
import useQuizStore from "../store/store";

const Options = () => {
  const index = useQuizStore((state) => state.index);
  const question = useQuizStore((state) => state.questions[state.index]);
  const answer = useQuizStore((state) => state.answer);
  const newAnswerQuiz = useQuizStore((state) => state.newAnswerQuiz);

  const [selectedOptions, setSelectedOptions] = useState([]);

  if (!question) return <p>Loading...</p>;

  const hasAnswered = answer !== null;
  const isMultipleChoice =
    Array.isArray(question.correctOption) && question.correctOption.length > 1;

  function handleAnswer(index) {
    if (isMultipleChoice) {
      const newSelection = selectedOptions.includes(index)
        ? selectedOptions.filter((i) => i !== index)
        : [...selectedOptions, index];
      setSelectedOptions(newSelection);
    } else {
      newAnswerQuiz([index]);
    }
  }

  function handleSubmit() {
    if (isMultipleChoice) {
      newAnswerQuiz(selectedOptions);
    }
  }

  return (
    <div>
      <div className="pt-5">
        <ul>
          {question.options.map((option, index) => (
            <li>
              <button
                className="button-a"
                key={option}
                disabled={hasAnswered}
                onClick={() => handleAnswer(index)}>
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {isMultipleChoice && !hasAnswered && selectedOptions.length > 0 && (
        <button className="button-a" onClick={handleSubmit}>
          Submit Answers
        </button>
      )}
    </div>
  );
};

export default Options;
