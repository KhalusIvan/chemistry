import { Grid } from "@mui/material";
import { darkenColor } from "@helpers/colorHelper";
import { styled } from "styled-components";
import { tableHeight } from "@constants";

export const TypeBox = styled.div`
  height: ${(props) => props.height || `${(tableHeight / 100) * 30 - 50}px`};
  margin: 4px;
  padding: 6px;
  background-color: ${(props) => props.background_color};
  font-size: 15px;
  border: 1px solid ${(props) => darkenColor(props.background_color)};
  transition: background-color 0.35s;

  ${(props) =>
    !props.hide_vertical
      ? `writing-mode: vertical-rl;
  text-orientation: mixed;`
      : ""}

  &:hover {
    border: 3px solid ${(props) => darkenColor(props.background_color, 0.4)};
    padding: 4px;
  }
`;

export const TypesWrapperGrid = styled(Grid)`
  width: calc(100% / 18 * 6.5 - 24px) !important;
  height: 30%;
  position: absolute;
  left: ${(100 / 18) * 4.5}%;
  padding: 8px 0px;
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
  transition: background-color 0.35s;

  &:hover {
    background-color: #eeeeee;
  }
`;
