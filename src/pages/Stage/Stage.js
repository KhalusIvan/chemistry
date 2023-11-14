import { elements } from "@constants";
import { Grid } from "@mui/material";
import LanthanideActinide from "./LanthanideActinide/LanthanideActinide";
import ColumnNumeration from "./Numeration/ColumnNumeration";
import RowNumeration from "./Numeration/RowNumeration";
import OneElement from "./OneElement/OneElement";
import { FullTableWrapper, TableInfoWrapper } from "./styledComponents";
import TypesPanel from "./TypesPanel/TypesPanel";

function Stage() {
  return (
    <FullTableWrapper>
      <RowNumeration />
      <Grid container wrap="nowrap">
        <ColumnNumeration />
        <TableInfoWrapper>
          {elements.map((element) => {
            return <OneElement key={element.id} element={element} />;
          })}
          <LanthanideActinide />
          <TypesPanel />
        </TableInfoWrapper>
      </Grid>
    </FullTableWrapper>
  );
}

export default Stage;
