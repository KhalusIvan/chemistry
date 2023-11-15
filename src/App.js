import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import "./App.css";
import MainPage from "@pages/MainPage/MainPage";
import PageWrapper from "@components/PageWrapper/PageWrapper";
import { QuizContext } from "@context/QuizContext";
import { useMemo, useState } from "react";

const defaultQuiz = {
  numberOfQuestions: 10,
  questionTime: "",
  showId: "question",
  showSymbol: "question",
  showName: "answer",
  showWeight: "answer",
  showType: "answer",
  showEnergyLevel: "hide",
};

const initializeQuiz = () => {
  const storage = localStorage.getItem("quizSetting");
  if (!storage) return defaultQuiz;
  return JSON.parse(storage);
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageWrapper>
        <MainPage />
      </PageWrapper>
    ),
  },
]);

function App() {
  const [quiz, setQuiz] = useState(initializeQuiz());

  const saveQuiz = (quiz) => {
    localStorage.setItem("quizSetting", JSON.stringify(quiz));
    setQuiz(quiz);
  };

  const value = useMemo(() => ({ quiz, setQuiz: saveQuiz }), [quiz]);

  return (
    <>
      <CssBaseline />
      <QuizContext.Provider value={value}>
        <RouterProvider router={router} />
      </QuizContext.Provider>
    </>
  );
}

export default App;
