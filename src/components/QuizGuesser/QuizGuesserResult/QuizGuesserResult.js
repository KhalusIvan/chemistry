/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import {
  QuizGuesserResultScore,
  QuizGuesserResultText,
} from "./styledComponents";

function QuizGuesserResult({ rightAnswers, numberOfQuestions }) {
  const percent = (rightAnswers * 100) / numberOfQuestions;
  let roundedPercent = parseFloat(percent.toFixed(2)).toString();
  roundedPercent = roundedPercent.endsWith(".00")
    ? roundedPercent.slice(0, -3)
    : roundedPercent;

  return (
    <Grid container justifyContent="center" spacing={1}>
      <Grid item>
        <QuizGuesserResultText>Результат:</QuizGuesserResultText>
      </Grid>
      <Grid item>
        <QuizGuesserResultScore>{roundedPercent}%</QuizGuesserResultScore>
      </Grid>
    </Grid>
  );
}

export default QuizGuesserResult;
