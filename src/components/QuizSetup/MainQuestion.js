/* eslint-disable react/prop-types */
import { Grid, TextField, Typography } from "@mui/material";

function MainQuestion({ values, errors, touched, handleChange, handleBlur }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          Загальні налаштування
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          color="primary"
          variant="outlined"
          value={values.numberOfQuestions}
          name="numberOfQuestions"
          onChange={handleChange}
          onBlur={handleBlur}
          label="Кількість питань*"
          type="number"
          fullWidth
          helperText={touched.numberOfQuestions && errors.numberOfQuestions}
          error={Boolean(touched.numberOfQuestions && errors.numberOfQuestions)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          color="primary"
          variant="outlined"
          value={values.questionTime}
          name="questionTime"
          onChange={handleChange}
          onBlur={handleBlur}
          label="Секунд на запитання"
          type="number"
          fullWidth
          helperText={touched.questionTime && errors.questionTime}
          error={Boolean(touched.questionTime && errors.questionTime)}
        />
      </Grid>
    </Grid>
  );
}

export default MainQuestion;
