import { useEffect } from "react";
import PageLayout from "../components/PageLayout";
import Loader from "../components/Loader";
import Error from "../components/Error";
import MainPage from "../components/MainPage";
import useQuizStore from "../store/store";
import ProgressBar from "../components/ProgressBar";
import Quiz from "../components/Quiz";
import Next from "../components/Next";
import Finished from "../components/Finished";

const Home = () => {
  const startQuiz = useQuizStore((state) => state.startQuiz);
  const dataReceivedSuccess = useQuizStore(
    (state) => state.dataReceivedSuccess
  );
  const dataReceivedFail = useQuizStore((state) => state.dataReceivedFail);
  const status = useQuizStore((state) => state.status);
  const questions = useQuizStore((state) => state.questions);

  const url =
    "https://rtzwjflattrvmhgikvrv.supabase.co/storage/v1/object/public/CS218/218.json";

  useEffect(() => {
    async function fetchQuestions() {
      try {
        startQuiz();
        const response = await fetch(url);
        const data = await response.json();
        dataReceivedSuccess(data);
      } catch (error) {
        console.error("Fetch error:", error);
        dataReceivedFail();
      }
    }

    fetchQuestions();
  }, []);

  const numQuestions = questions?.length || 0;
  const maxPoints = questions?.reduce((prev, cur) => prev + cur.points, 0) || 0;

  return (
    <PageLayout>
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && <MainPage />}
      {status === "active" && (
        <>
          <ProgressBar numQuestions={numQuestions} maxPoints={maxPoints} />
          <Quiz numQuestions={numQuestions} />
          <Next numQuestions={numQuestions} />
        </>
      )}
      {status === "finished" && <Finished maxPoints={maxPoints} />}
    </PageLayout>
  );
};

export default Home;
