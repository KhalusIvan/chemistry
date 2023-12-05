/* eslint-disable react/prop-types */
import { getHistory } from "@helpers/history";
import { getResultInPercents } from "@helpers/quiz";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  IconButton,
} from "@mui/material";
import { useContext, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { CurrentQuizContext } from "@context/CurrentQuizContext";

const options = {
  year: "numeric",
  month: "long",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
};

function TableList({ handleClose }) {
  const [list, setList] = useState(getHistory());
  const { setCurrentQuiz } = useContext(CurrentQuizContext);

  const deleteQuiz = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    localStorage.setItem("quizHistory", JSON.stringify(newList));
  };

  return (
    <>
      {list.length === 0 ? (
        <Box my={4}>
          <Typography variant="h6" align="center">
            Наразі немає пройдених опитувань!
          </Typography>
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Дата</TableCell>
                <TableCell align="right">Кількість питань</TableCell>
                <TableCell align="right">Результат</TableCell>
                <TableCell align="center">Дії</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {new Date(row.id).toLocaleDateString("uk-UA", options)}
                  </TableCell>
                  <TableCell align="right">{row.questions.length}</TableCell>
                  <TableCell align="right">
                    {getResultInPercents(
                      row.rightAnswers,
                      row.questions.length,
                    )}
                    %
                  </TableCell>
                  <TableCell>
                    <Grid container spacing={1} justifyContent="center">
                      <Grid item>
                        <IconButton
                          onClick={() => {
                            setCurrentQuiz(row);
                            handleClose();
                          }}
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton onClick={() => deleteQuiz(row.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}

export default TableList;
