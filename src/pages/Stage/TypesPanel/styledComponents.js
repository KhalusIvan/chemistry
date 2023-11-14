import { Grid } from "@mui/material";
import { darkenColor } from "@helpers/colorHelper";
import { styled } from "styled-components";

export const TypeBox = styled.div`
  height: ${(props) => props.height || "186px"};
  margin: 4px;
  padding: 8px;
  background-color: ${(props) => props.backgroundColor};
  font-size: 15px;
  border: 1px solid ${(props) => darkenColor(props.backgroundColor)};

  ${(props) =>
    !props.hideVertical
      ? `writing-mode: vertical-rl;
  text-orientation: mixed;`
      : ""}
`;

export const TypesWrapperGrid = styled(Grid)`
  width: calc(100% / 18 * 6.5 - 24px) !important;
  height: 30%;
  position: absolute;
  left: ${(100 / 18) * 5.5}%;
  padding: 8px;
`;

export const TypeGroupHeader = styled.div`
  width: calc(100% - 8px);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-bottom: none;
  ${(props) =>
    props.is_metal
      ? `border-top-left-radius: 12px;`
      : `border-top-right-radius: 12px;`}
  margin: 4px;
`;
