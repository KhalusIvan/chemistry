/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import {
  QuizGuesserBox,
  QuizGuesserElectron,
  QuizGuesserName,
  QuizGuesserNumber,
  QuizGuesserSymbol,
  QuizGuesserWeight,
} from "./styledComponents";

function QuizGuesserCard({ quizGuesserElement = {}, settings }) {
  let color = quizGuesserElement.type?.color || "#EEEEEE";
  let { id, symbol, name, weight } = quizGuesserElement;

  if (settings.showId !== "question") id = "";
  if (settings.showSymbol !== "question") symbol = "";
  if (settings.showName !== "question") name = "";
  if (settings.showWeight !== "question") weight = "";
  if (settings.showType !== "question") color = "#FFFFFF";

  return (
    <Grid container justifyContent="center">
      <Grid item>
        <QuizGuesserBox element_color={color}>
          <Grid container>
            <Grid item xs>
              <QuizGuesserNumber>{id}</QuizGuesserNumber>
              <QuizGuesserSymbol>{symbol}</QuizGuesserSymbol>
              <QuizGuesserName>{name}</QuizGuesserName>
              <QuizGuesserWeight>{weight}</QuizGuesserWeight>
            </Grid>
            <Grid item xs="auto">
              {quizGuesserElement.electrons.map((electron, index) => (
                <QuizGuesserElectron key={index}>
                  {settings.showEnergyLevel === "question" ? electron : ""}
                </QuizGuesserElectron>
              ))}
            </Grid>
          </Grid>
        </QuizGuesserBox>
      </Grid>
    </Grid>
  );
}

export default QuizGuesserCard;
