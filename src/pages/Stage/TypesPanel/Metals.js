import { Grid } from "@mui/material";
import { types } from "@constants";
import { TypeBox, TypeGroupHeader } from "./styledComponents";

function Metals() {
  return (
    <Grid item xs>
      <TypeGroupHeader is_metal={1}>Метали</TypeGroupHeader>
      <Grid container wrap="nowrap">
        <Grid item xs="auto">
          <TypeBox backgroundColor={types.alkaliMetal.color}>
            {types.alkaliMetal.name}
          </TypeBox>
        </Grid>
        <Grid item xs="auto">
          <TypeBox backgroundColor={types.alkalineEarthMetal.color}>
            {types.alkalineEarthMetal.name}
          </TypeBox>
        </Grid>

        <Grid item xs>
          <Grid container>
            <Grid item xs={12}>
              <TypeBox
                backgroundColor={types.lanthanide.color}
                height="88px"
                hideVertical
              >
                {types.lanthanide.name}
              </TypeBox>
            </Grid>
            <Grid item xs={12}>
              <TypeBox
                backgroundColor={types.actinide.color}
                height="88px"
                hideVertical
              >
                {types.actinide.name}
              </TypeBox>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs="auto">
          <TypeBox backgroundColor={types.transitionMetal.color}>
            {types.transitionMetal.name}
          </TypeBox>
        </Grid>
        <Grid item xs="auto">
          <TypeBox backgroundColor={types.postTransitionMetal.color}>
            {types.postTransitionMetal.name}
          </TypeBox>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Metals;
