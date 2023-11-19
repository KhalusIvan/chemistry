import { elements } from "@constants";
import { CurrentQuizContext } from "@context/CurrentQuizContext";
import Table from "@pages/MainPage/Table";
import { useContext, useState } from "react";
import QuizGuesser from "./QuizGuesser";
import SelectedElement from "./SelectedElement";
import {
  PageWrapper,
  SelectedElementBlock,
  TableBlock,
} from "./styledComponents";

const initializeSelectedElement = () => {
  const id = localStorage.getItem("selectedItemId") || 0;
  return elements.find((element) => element.id === +id) || elements[0];
};

const calculateRightAnswers = (quiz) => {
  let rightAnswers = 0;
  quiz.questions.forEach((question) => {
    if (question.answers.find((answer) => answer.id === question.question.id)) {
      rightAnswers++;
    }
  });
  return rightAnswers;
};

function MainPage() {
  const { currentQuiz, setCurrentQuiz } = useContext(CurrentQuizContext);
  const [selectedElement, setSelectedElement] = useState(
    initializeSelectedElement(),
  );

  const setSelectedElementWithLocalStore = (element) => {
    localStorage.setItem("selectedItemId", element.id);
    setSelectedElement(element);
  };

  return (
    <PageWrapper>
      <SelectedElementBlock is_quiz={+!!currentQuiz}>
        {currentQuiz ? (
          <QuizGuesser
            currentQuiz={currentQuiz}
            setQuizViewQuestion={(index) => {
              const newQuiz = JSON.parse(JSON.stringify(currentQuiz));
              newQuiz.viewQuestion = index;
              setCurrentQuiz(newQuiz);
            }}
            setQuizNextQuestion={() => {
              const newQuiz = JSON.parse(JSON.stringify(currentQuiz));
              newQuiz.currentQuestion += 1;
              if (newQuiz.currentQuestion === newQuiz.questions.length) {
                newQuiz.rightAnswers = calculateRightAnswers(newQuiz);
              }
              setCurrentQuiz(newQuiz);
            }}
          />
        ) : (
          <SelectedElement selectedElement={selectedElement} />
        )}
      </SelectedElementBlock>
      <TableBlock>
        <Table
          selectedElement={selectedElement}
          setSelectedElement={setSelectedElementWithLocalStore}
          currentQuiz={currentQuiz}
          setQuizAnswer={(element) => {
            const newQuiz = JSON.parse(JSON.stringify(currentQuiz));
            newQuiz.questions[newQuiz.currentQuestion].answers.push(element);
            const question = newQuiz.questions[newQuiz.currentQuestion];
            const answers = question.answers;
            if (
              answers.length >= newQuiz.settings.attempts ||
              !!answers.find((answer) => answer.id === question.question.id)
            ) {
              newQuiz.currentQuestion++;
            }
            if (newQuiz.currentQuestion === newQuiz.questions.length) {
              newQuiz.rightAnswers = calculateRightAnswers(newQuiz);
            }
            setCurrentQuiz(newQuiz);
          }}
        />
      </TableBlock>
    </PageWrapper>
  );
}

export default MainPage;
