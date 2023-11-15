/* eslint-disable react/prop-types */
import { Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Box } from "@mui/system";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

function SelectedElementModelController({
  animationState,
  changeAnimationState,
}) {
  return (
    <Box my={1} mx={3}>
      <Grid container justifyContent="space-between">
        <Grid item>
          <ToggleButtonGroup
            exclusive
            size="small"
            value={animationState.speed}
            onChange={(e, value) =>
              value && changeAnimationState({ speed: value })
            }
          >
            <ToggleButton value={"1x"}>1x</ToggleButton>
            <ToggleButton value={"2x"}>2x</ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid item>
          <ToggleButtonGroup
            exclusive
            size="small"
            value={animationState.state}
            onChange={(e, value) =>
              value && changeAnimationState({ state: value })
            }
          >
            <ToggleButton value="pause">
              <PauseIcon />
            </ToggleButton>
            <ToggleButton value="play">
              <PlayArrowIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid item>
          <ToggleButtonGroup
            exclusive
            size="small"
            value={animationState.volume}
            onChange={(e, value) =>
              value && changeAnimationState({ volume: value })
            }
          >
            <ToggleButton value="2d">2d</ToggleButton>
            <ToggleButton value="3d">3d</ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SelectedElementModelController;
