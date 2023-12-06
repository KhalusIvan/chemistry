/* eslint-disable react/prop-types */
import { Box, Grid } from "@mui/material";
import { QuestionBox } from "./styledComponents";

function QuizGuesserList({ currentQuiz, setQuizViewQuestion }) {
  const { questions, currentQuestion, viewQuestion } = currentQuiz;
  const clickable = questions.length <= currentQuestion;

  return (
    <Box px={2} py={4}>
      <Grid container spacing={1}>
        {questions.map((question, index) => {
          const status =
            currentQuestion === index
              ? "current"
              : currentQuestion < index
              ? "future"
              : question.answers.includes(question.question)
              ? "success"
              : "error";

          return (
            <Grid key={question.question} item xs={2}>
              <QuestionBox
                status={status}
                is_view={+(viewQuestion === index)}
                clickable={+clickable}
                onClick={() => {
                  if (clickable) {
                    setQuizViewQuestion(index);
                  }
                }}
              >
                {index + 1}
              </QuestionBox>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default QuizGuesserList;
