/* eslint-disable react/prop-types */
import QuizGuesserCard from "@components/QuizGuesser/QuizGuesserCard/QuizGuesserCard";
import QuizGuesserList from "@components/QuizGuesser/QuizGuesserList/QuizGuesserList";
import QuizGuesserPlaceholder from "@components/QuizGuesser/QuizGuesserPlaceholder/QuizGuesserPlaceholder";
import QuizGuesserResult from "@components/QuizGuesser/QuizGuesserResult/QuizGuesserResult";

function QuizGuesser({ currentQuiz, setQuizViewQuestion }) {
  let question = currentQuiz.questions[currentQuiz.currentQuestion]?.question;

  if (!question && currentQuiz.viewQuestion !== null) {
    question = currentQuiz.questions[currentQuiz.viewQuestion]?.question;
  }

  return (
    <>
      {question ? (
        <QuizGuesserCard
          quizGuesserElement={question}
          settings={currentQuiz.settings}
        />
      ) : (
        <QuizGuesserPlaceholder></QuizGuesserPlaceholder>
      )}
      <QuizGuesserList
        currentQuiz={currentQuiz}
        setQuizViewQuestion={setQuizViewQuestion}
      />
      {currentQuiz.questions.length <= currentQuiz.currentQuestion && (
        <QuizGuesserResult
          rightAnswers={currentQuiz.rightAnswers}
          numberOfQuestions={currentQuiz.questions.length}
        />
      )}
    </>
  );
}

export default QuizGuesser;
