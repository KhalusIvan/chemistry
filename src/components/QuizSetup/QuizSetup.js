/* eslint-disable react/prop-types */
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import { useContext } from "react";
import { QuizContext } from "@context/QuizContext";
import * as Yup from "yup";
import Form from "./Form";

function QuizSetup({ isOpen, handleClose }) {
  const { quiz, setQuiz } = useContext(QuizContext);

  return (
    <Dialog
      fullWidth
      open={isOpen}
      maxWidth="xs"
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        <Typography variant="h4">Налаштування</Typography>
      </DialogTitle>
      <Formik
        initialValues={{
          numberOfQuestions: quiz.numberOfQuestions,
          questionTime: quiz.questionTime || "",
          showId: quiz.showId,
          showSymbol: quiz.showSymbol,
          showName: quiz.showName,
          showWeight: quiz.showWeight,
          showType: quiz.showType,
          showEnergyLevel: quiz.showEnergyLevel,
          validData: "",
        }}
        validationSchema={Yup.object().shape({
          numberOfQuestions: Yup.number()
            .positive("Мінімум 1 запитання")
            .integer("Не цілочисельне число")
            .required("Обовʼязкове поле"),
          questionTime: Yup.number()
            .positive("Мінімум 1 секунда")
            .integer("Не цілочисельне число"),
          validData: Yup.string().test(
            "is_valid",
            "Обовʼязково щось повинно бути в питанні та таблиці",
            function () {
              const result = Object.values(this.from[0].value);
              if (!result.includes("question") || !result.includes("answer"))
                return false;
              return true;
            },
          ),
        })}
        onSubmit={(values) => {
          const obj = {
            numberOfQuestions: +values.numberOfQuestions,
            questionTime: +values.questionTime || "",
            showId: values.showId,
            showSymbol: values.showSymbol,
            showName: values.showName,
            showWeight: values.showWeight,
            showType: values.showType,
            showEnergyLevel: values.showEnergyLevel,
          };
          setQuiz(obj);
          handleClose();
        }}
      >
        {({
          errors,
          handleSubmit,
          isSubmitting,
          handleBlur,
          handleChange,
          values,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <Form
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </DialogContent>
            <DialogActions>
              <Button
                color="primary"
                variant="contained"
                type="sumbit"
                disabled={isSubmitting}
                endIcon={isSubmitting ? <CircularProgress size={16} /> : null}
              >
                {isSubmitting ? "Будь ласка зачекайте ..." : "Зберегти"}
              </Button>
            </DialogActions>
          </form>
        )}
      </Formik>
    </Dialog>
  );
}

export default QuizSetup;
