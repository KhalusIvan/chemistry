/* eslint-disable react/prop-types */
import {
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

const questions = [
  { title: "Номер", name: "showId" },
  { title: "Позначення", name: "showSymbol" },
  { title: "Назва", name: "showName" },
  { title: "Вага", name: "showWeight" },
  { title: "Тип", name: "showType" },
  { title: "Енергетичні рівнi", name: "showEnergyLevel" },
];
function ShowForm({ values, handleChange, error }) {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          Показ параметрів
        </Typography>
        {!!error && (
          <Typography variant="caption" style={{ color: "#d32f2f" }}>
            {error}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          {questions.map((question) => {
            return (
              <Grid key={question.name} item xs={12}>
                <Typography variant="h6">{question.title}</Typography>
                <RadioGroup
                  name={question.name}
                  value={values[question.name]}
                  onChange={handleChange}
                  row
                >
                  <FormControlLabel
                    value="question"
                    control={<Radio />}
                    label="В питанні"
                  />
                  {question.name !== "showEnergyLevel" && (
                    <FormControlLabel
                      value="answer"
                      control={<Radio />}
                      label="В таблиці"
                    />
                  )}
                  <FormControlLabel
                    value="hide"
                    control={<Radio />}
                    label="Приховати"
                  />
                </RadioGroup>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ShowForm;
