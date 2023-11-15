/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import { types, tableHeight } from "@constants";
import Metals from "./Metals";
import NonMetals from "./NonMetals";
import { TypesWrapperGrid } from "./styledComponents";
import RenderTypeBox from "./RenderTypeBox";

function TypesPanel({ hoveredTypes, setHoveredTypes }) {
  return (
    <TypesWrapperGrid container wrap="nowrap">
      <Metals hoveredTypes={hoveredTypes} setHoveredTypes={setHoveredTypes} />
      <Grid item xs="auto">
        <RenderTypeBox
          hoveredTypes={hoveredTypes}
          setHoveredTypes={setHoveredTypes}
          type={types.metalloid}
          height={`${(tableHeight / 100) * 30 - 17}px`}
        />
      </Grid>
      <NonMetals
        hoveredTypes={hoveredTypes}
        setHoveredTypes={setHoveredTypes}
      />
    </TypesWrapperGrid>
  );
}

export default TypesPanel;
