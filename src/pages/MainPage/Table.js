/* eslint-disable react/prop-types */
import { elements } from "@constants";
import { Grid } from "@mui/material";
import { useState } from "react";
import InfoWeightText from "@components/TableComponents/InfoWeightText/InfoWeightText";
import LanthanideActinide from "@components/TableComponents/LanthanideActinide/LanthanideActinide";
import ColumnNumeration from "@components/TableComponents/Numeration/ColumnNumeration";
import RowNumeration from "@components/TableComponents/Numeration/RowNumeration";
import OneElement from "@components/TableComponents/OneElement/OneElement";
import { FullTableWrapper, TableInfoWrapper } from "./styledComponents";
import TypesPanel from "@components/TableComponents/TypesPanel/TypesPanel";

function Table({ selectedElement, setSelectedElement }) {
  const [hoveredTypes, setHoveredTypes] = useState([]);

  return (
    <FullTableWrapper>
      <RowNumeration />
      <Grid container wrap="nowrap">
        <ColumnNumeration />
        <TableInfoWrapper>
          {elements.map((element) => {
            return (
              <OneElement
                key={element.id}
                element={element}
                hoveredTypes={hoveredTypes}
                selectedElement={selectedElement}
                setSelectedElement={setSelectedElement}
              />
            );
          })}
          <LanthanideActinide />
          <InfoWeightText />
          <TypesPanel
            hoveredTypes={hoveredTypes}
            setHoveredTypes={setHoveredTypes}
          />
        </TableInfoWrapper>
      </Grid>
    </FullTableWrapper>
  );
}

export default Table;
