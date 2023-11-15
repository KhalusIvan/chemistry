/* eslint-disable react/prop-types */
import { Grid, IconButton } from "@mui/material";
import { HeaderWrapper } from "./styledComponents";
import SettingsIcon from "@mui/icons-material/Settings";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState } from "react";
import QuizSetup from "@components/QuizSetup/QuizSetup";

function Header() {
  const [quizSetup, setQuizSetup] = useState({ isOpen: false });

  return (
    <>
      <HeaderWrapper>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <div id="header__logo">Інтерактивна таблиця Менделеєва</div>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <IconButton
                  size="large"
                  onClick={() => setQuizSetup({ isOpen: true })}
                >
                  <SettingsIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton size="large">
                  <PlayArrowIcon />
                </IconButton>
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
