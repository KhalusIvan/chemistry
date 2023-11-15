/* eslint-disable react/prop-types */
import { Tooltip } from "@mui/material";
import {
  ElementWrapper,
  ElementBox,
  ElementNumber,
  ElementName,
  ElementSymbol,
  ElementWeight,
} from "./styledComponents";

function OneElement({
  element,
  hoveredTypes,
  selectedElement,
  setSelectedElement,
}) {
  const typeColor = element.type?.color || "#EEEEEE";
  const isAnyHover = hoveredTypes.length > 0;
  const color = !isAnyHover
    ? typeColor
    : hoveredTypes.includes(element.type?.id)
    ? typeColor
    : "#FFFFFF";

  return (
    <ElementWrapper key={element.id} row={element.row} column={element.column}>
      <ElementBox
        is_selected={+(selectedElement?.id === element.id)}
        element_color={color}
        onClick={() => setSelectedElement(element)}
      >
        <ElementNumber>{element.id}</ElementNumber>
        <ElementSymbol>{element.symbol}</ElementSymbol>
        <Tooltip title={element.name} enterDelay={500}>
          <ElementName>{element.name}</ElementName>
        </Tooltip>
        <ElementWeight>{element.weight}</ElementWeight>
      </ElementBox>
    </ElementWrapper>
  );
}

export default OneElement;
