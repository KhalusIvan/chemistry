/* eslint-disable react/prop-types */
import { getResultInPercents } from "@helpers/quiz";
import { Grid } from "@mui/material";
import {
  QuizGuesserResultScore,
  QuizGuesserResultText,
} from "./styledComponents";

function QuizGuesserResult({ rightAnswers, numberOfQuestions }) {
  return (
    <Grid container justifyContent="center" spacing={1}>
      <Grid item>
        <QuizGuesserResultText>Результат:</QuizGuesserResultText>
      </Grid>
      <Grid item>
        <QuizGuesserResultScore>
          {getResultInPercents(rightAnswers, numberOfQuestions)}%
        </QuizGuesserResultScore>
      </Grid>
    </Grid>
  );
}

export default QuizGuesserResult;
