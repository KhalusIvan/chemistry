import { Grid } from "@mui/material";
import { types } from "@constants";
import { TypeBox, TypeGroupHeader } from "./styledComponents";

function NonMetals() {
  return (
    <Grid item xs="auto">
      <TypeGroupHeader>Неметали</TypeGroupHeader>
      <Grid container wrap="nowrap">
        <Grid item xs>
          <TypeBox backgroundColor={types.nonmetal.color}>
            {types.nonmetal.name}
          </TypeBox>
        </Grid>
        <Grid item xs>
          <TypeBox backgroundColor={types.nobleGas.color}>
            {types.nobleGas.name}
          </TypeBox>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NonMetals;
