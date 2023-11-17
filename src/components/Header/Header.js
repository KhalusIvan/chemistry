/* eslint-disable react/prop-types */
import { Button, Grid } from "@mui/material";
import { HeaderWrapper } from "./styledComponents";
import { useContext, useState } from "react";
import QuizSetup from "@components/QuizSetup/QuizSetup";
import { CurrentQuizContext } from "@context/CurrentQuizContext";
import { generateQuiz } from "@helpers/quizGenerator";
import { QuizContext } from "@context/QuizContext";

function Header() {
  const [quizSetup, setQuizSetup] = useState({ isOpen: false });
  const { currentQuiz, setCurrentQuiz } = useContext(CurrentQuizContext);
  const { quiz } = useContext(QuizContext);

  return (
    <>
      <HeaderWrapper>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <div id="header__logo">Інтерактивна таблиця Менделеєва</div>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              {!currentQuiz && (
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => setQuizSetup({ isOpen: true })}
                  >
                    Налаштувати опитування
                  </Button>
                </Grid>
              )}
              <Grid item>
                <Button
                  variant={
                    currentQuiz &&
                    currentQuiz.questions.length > currentQuiz.currentQuestion
                      ? "outlined"
                      : "contained"
                  }
                  color="primary"
                  onClick={() =>
                    setCurrentQuiz(
                      currentQuiz
                        ? null
                        : {
                            questions: generateQuiz(quiz),
                            settings: quiz,
                            currentQuestion: 0,
                            viewQuestion: null,
                          },
                    )
                  }
                >
                  {currentQuiz
                    ? currentQuiz.questions.length <=
                      currentQuiz.currentQuestion
                      ? "Закрити опитування"
                      : "Зупинити опитування"
                    : "Почати опитування"}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </HeaderWrapper>
      <QuizSetup
        isOpen={quizSetup.isOpen}
        handleClose={() => setQuizSetup({ isOpen: false })}
      />
    </>
  );
}

export default Header;
