/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { useRef, useEffect, useState } from "react";
import {
  QuizGuesserTimerLine,
  QuizGuesserTimerWrapper,
} from "./styledComponents";

function QuizGuesserTimer({ currentQuiz, setQuizNextQuestion }) {
  const [currentTimeState, setCurrentTimeState] = useState(
    currentQuiz.settings.questionTime,
  );
  const timerInterval = useRef({
    interval: null,
    timePerQuestion: currentQuiz.settings.questionTime,
    currentTime: currentQuiz.settings.questionTime,
  });

  useEffect(() => {
    timerInterval.current.interval = setInterval(() => {
      timerInterval.current.currentTime -= 1;
      if (timerInterval.current.currentTime === 0) {
        timerInterval.current.currentTime =
          timerInterval.current.timePerQuestion;
        setQuizNextQuestion();
      }
      setCurrentTimeState(timerInterval.current.currentTime);
    }, 1000);

    return () => {
      timerInterval.current.currentTime = timerInterval.current.timePerQuestion;
      setCurrentTimeState(timerInterval.current.currentTime);
      timerInterval.current.interval &&
        clearInterval(timerInterval.current.interval);
    };
  }, [currentQuiz.currentQuestion]);

  return (
    <Box mx={3}>
      <Typography variant="h6" align="center">
        {currentTimeState}
      </Typography>
      <QuizGuesserTimerWrapper>
        <QuizGuesserTimerLine
          key={currentQuiz.currentQuestion}
          question_time={currentQuiz.settings.questionTime}
        />
      </QuizGuesserTimerWrapper>
    </Box>
  );
}

export default QuizGuesserTimer;
