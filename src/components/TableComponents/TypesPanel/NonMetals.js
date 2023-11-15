/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import { types } from "@constants";
import { TypeGroupHeader } from "./styledComponents";
import RenderTypeBox from "./RenderTypeBox";

function NonMetals({ hoveredTypes, setHoveredTypes }) {
  return (
    <Grid item xs="auto">
      <TypeGroupHeader
        onMouseEnter={() => {
          setHoveredTypes([types.nonmetal.id, types.nobleGas.id]);
        }}
        onMouseLeave={() => {
          setHoveredTypes([]);
        }}
      >
        Неметали
      </TypeGroupHeader>
      <Grid container wrap="nowrap">
        <Grid item xs>
          <RenderTypeBox
            hoveredTypes={hoveredTypes}
            setHoveredTypes={setHoveredTypes}
            type={types.nonmetal}
          />
        </Grid>
        <Grid item xs>
          <RenderTypeBox
            hoveredTypes={hoveredTypes}
            setHoveredTypes={setHoveredTypes}
            type={types.nobleGas}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NonMetals;
