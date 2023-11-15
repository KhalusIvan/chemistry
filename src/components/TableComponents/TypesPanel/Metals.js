/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import { types, tableHeight } from "@constants";
import { TypeGroupHeader } from "./styledComponents";
import RenderTypeBox from "./RenderTypeBox";

function Metals({ hoveredTypes, setHoveredTypes }) {
  const centerHeight = `${(tableHeight / 100) * 30 - 140}px`;

  return (
    <Grid item xs>
      <TypeGroupHeader
        onMouseEnter={() => {
          setHoveredTypes([
            types.alkaliMetal.id,
            types.alkalineEarthMetal.id,
            types.lanthanide.id,
            types.actinide.id,
            types.transitionMetal.id,
            types.postTransitionMetal.id,
          ]);
        }}
        onMouseLeave={() => {
          setHoveredTypes([]);
        }}
        is_metal={1}
      >
        Метали
      </TypeGroupHeader>
      <Grid container wrap="nowrap">
        <Grid item xs="auto">
          <RenderTypeBox
            hoveredTypes={hoveredTypes}
            setHoveredTypes={setHoveredTypes}
            type={types.alkaliMetal}
          />
        </Grid>
        <Grid item xs="auto">
          <RenderTypeBox
            hoveredTypes={hoveredTypes}
            setHoveredTypes={setHoveredTypes}
            type={types.alkalineEarthMetal}
          />
        </Grid>

        <Grid item xs>
          <Grid container>
            <Grid item xs={12}>
              <RenderTypeBox
                hoveredTypes={hoveredTypes}
                setHoveredTypes={setHoveredTypes}
                type={types.lanthanide}
                height={centerHeight}
                hide_vertical={1}
              />
            </Grid>
            <Grid item xs={12}>
              <RenderTypeBox
                hoveredTypes={hoveredTypes}
                setHoveredTypes={setHoveredTypes}
                type={types.actinide}
                height={centerHeight}
                hide_vertical={1}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs="auto">
          <RenderTypeBox
            hoveredTypes={hoveredTypes}
            setHoveredTypes={setHoveredTypes}
            type={types.transitionMetal}
          />
        </Grid>
        <Grid item xs="auto">
          <RenderTypeBox
            hoveredTypes={hoveredTypes}
            setHoveredTypes={setHoveredTypes}
            type={types.postTransitionMetal}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Metals;
