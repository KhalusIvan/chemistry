/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import {
  SelectedElementBox,
  SelectedElementElectron,
  SelectedElementName,
  SelectedElementNumber,
  SelectedElementSymbol,
  SelectedElementWeight,
} from "./styledComponents";

function SelectedElementCard({ selectedElement }) {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <SelectedElementBox
          element_color={selectedElement.type?.color || "#EEEEEE"}
        >
          <Grid container>
            <Grid item xs>
              <SelectedElementNumber>
                {selectedElement.id}
              </SelectedElementNumber>
              <SelectedElementSymbol>
                {selectedElement.symbol}
              </SelectedElementSymbol>
              <SelectedElementName>{selectedElement.name}</SelectedElementName>
              <SelectedElementWeight>
                {selectedElement.weight}
              </SelectedElementWeight>
            </Grid>
            <Grid item xs="auto">
              {selectedElement.electrons.map((electron, index) => (
                <SelectedElementElectron key={index}>
                  {electron}
                </SelectedElementElectron>
              ))}
            </Grid>
          </Grid>
        </SelectedElementBox>
      </Grid>
    </Grid>
  );
}

export default SelectedElementCard;
