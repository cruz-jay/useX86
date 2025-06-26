import { create } from "zustand";

const useQuizStore = create((set, get) => ({
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,

  dataReceivedSuccess: (data) =>
    set({ status: "ready", questions: data.questions }),

  dataReceivedFail: () => set({ status: "error" }),

  startQuiz: () => set({ status: "active" }),

  newAnswerQuiz: (payload) => {
    const { questions, index, points } = get();
    const question = questions.at(index);

    const isCorrect =
      Array.isArray(payload) &&
      Array.isArray(question.correctOption) &&
      payload.length === question.correctOption.length &&
      payload.every((x) => question.correctOption.includes(x)) &&
      question.correctOption.every((x) => payload.includes(x));

    set({
      answer: payload,
      points: isCorrect ? points + question.points : points,
    });
  },

  newQuestionQuiz: () =>
    set((state) => ({
      index: state.index + 1,
      answer: null,
    })),

  quizFinished: () => set({ status: "finished" }),

  quizReset: () =>
    set({
      status: "ready",
      answer: null,
      points: 0,
      index: 0,
    }),
}));

export default useQuizStore;
