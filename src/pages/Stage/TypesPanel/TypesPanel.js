import { Grid } from "@mui/material";
import { types } from "@constants";
import Metals from "./Metals";
import NonMetals from "./NonMetals";
import { TypesWrapperGrid, TypeBox } from "./styledComponents";

function TypesPanel() {
  return (
    <TypesWrapperGrid container wrap="nowrap">
      <Metals />
      <Grid item xs="auto">
        <TypeBox backgroundColor={types.metalloid.color} height="220px">
          {types.metalloid.name}
        </TypeBox>
      </Grid>
      <NonMetals />
    </TypesWrapperGrid>
  );
}

export default TypesPanel;
