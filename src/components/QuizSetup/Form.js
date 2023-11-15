/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import MainQuestion from "./MainQuestion";
import ShowForm from "./ShowForm";

function Form({ values, errors, touched, handleChange, handleBlur }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MainQuestion
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </Grid>
      <Grid item xs={12}>
        <ShowForm
          values={values}
          handleChange={handleChange}
          error={touched.validData && errors.validData}
        />
      </Grid>
    </Grid>
  );
}

export default Form;
