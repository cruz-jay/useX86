import useQuizStore from "../store/store";
import Options from "./Options";

const Quiz = () => {
  const questions = useQuizStore((state) => state.questions);
  const index = useQuizStore((state) => state.index);

  // Get the current question object
  const question = questions[index];

  if (!question) return null;

  return (
    <div>
      <h4 className="pt-5" id="#questions">
        {question.question}
      </h4>
      <Options />
    </div>
  );
};

export default Quiz;
