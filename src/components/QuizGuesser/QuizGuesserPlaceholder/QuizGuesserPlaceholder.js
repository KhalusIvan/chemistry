import { Grid } from "@mui/material";
import { QuizGuesserBox, QuizGuesserPlaceholderText } from "./styledComponents";

function QuizGuesserPlaceholder() {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <QuizGuesserBox element_color={"#FFFFFF"}>
          <QuizGuesserPlaceholderText>
            Щоб переглянути відповіді оберіть питання
          </QuizGuesserPlaceholderText>
        </QuizGuesserBox>
      </Grid>
    </Grid>
  );
}

export default QuizGuesserPlaceholder;
