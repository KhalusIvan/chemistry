/* eslint-disable react/prop-types */
import QuizGuesserCard from "@components/QuizGuesser/QuizGuesserCard/QuizGuesserCard";
import QuizGuesserList from "@components/QuizGuesser/QuizGuesserList/QuizGuesserList";
import QuizGuesserPlaceholder from "@components/QuizGuesser/QuizGuesserPlaceholder/QuizGuesserPlaceholder";
import QuizGuesserResult from "@components/QuizGuesser/QuizGuesserResult/QuizGuesserResult";
import QuizGuesserTimer from "@components/QuizGuesser/QuizGuesserTimer/QuizGuesserTimer";
import { elements } from "@constants";

function QuizGuesser({
  currentQuiz,
  setQuizViewQuestion,
  setQuizNextQuestion,
}) {
  let questionElementId =
    currentQuiz.questions[currentQuiz.currentQuestion]?.question;

  if (!questionElementId && currentQuiz.viewQuestion !== null) {
    questionElementId =
      currentQuiz.questions[currentQuiz.viewQuestion]?.question;
  }

  const isFinished =
    currentQuiz.questions.length <= currentQuiz.currentQuestion;

  return (
    <>
      {questionElementId ? (
        <QuizGuesserCard
          quizGuesserElement={elements.find(
            (element) => element.id === questionElementId,
          )}
          settings={currentQuiz.settings}
        />
      ) : (
        <QuizGuesserPlaceholder></QuizGuesserPlaceholder>
      )}
      <QuizGuesserList
        currentQuiz={currentQuiz}
        setQuizViewQuestion={setQuizViewQuestion}
      />
      {!isFinished && !!currentQuiz.settings.questionTime && (
        <QuizGuesserTimer
          currentQuiz={currentQuiz}
          setQuizNextQuestion={setQuizNextQuestion}
        />
      )}

      {isFinished && (
        <QuizGuesserResult
          rightAnswers={currentQuiz.rightAnswers}
          numberOfQuestions={currentQuiz.questions.length}
        />
      )}
    </>
  );
}

export default QuizGuesser;
