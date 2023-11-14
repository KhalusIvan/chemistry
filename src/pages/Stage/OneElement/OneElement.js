/* eslint-disable react/prop-types */
import {
  ElementWrapper,
  ElementBox,
  ElementNumber,
  ElementName,
  ElementSymbol,
  ElementWeight,
} from "./styledComponents";

function OneElement({ element }) {
  return (
    <ElementWrapper key={element.id} row={element.row} column={element.column}>
      <ElementBox elementColor={element.type?.color || "#EEEEEE"}>
        <ElementNumber>{element.id}</ElementNumber>
        <ElementSymbol>{element.symbol}</ElementSymbol>
        <ElementName letterSpacing={element.id == 104 ? "-0.2px" : "0px"}>
          {element.name}
        </ElementName>
        <ElementWeight>{element.weight}</ElementWeight>
      </ElementBox>
    </ElementWrapper>
  );
}

export default OneElement;
