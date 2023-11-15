/* eslint-disable react/prop-types */
import { TypeBox } from "./styledComponents";

function RenderTypeBox({ hoveredTypes, setHoveredTypes, type, ...props }) {
  const isAnyHover = hoveredTypes.length > 0;
  const color = !isAnyHover
    ? type.color
    : hoveredTypes.includes(type.id)
    ? type.color
    : "#FFFFFF";

  return (
    <TypeBox
      background_color={color}
      onMouseEnter={() => {
        setHoveredTypes([type.id]);
      }}
      onMouseLeave={() => {
        setHoveredTypes([]);
      }}
      {...props}
    >
      {type.name}
    </TypeBox>
  );
}

export default RenderTypeBox;
