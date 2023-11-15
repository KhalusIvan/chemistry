import { Box } from "@mui/material";
import { tableWidth } from "@constants";
import { styled } from "styled-components";
import { darkenColor } from "@helpers/colorHelper";

export const ElementBox = styled(Box)`
  background: ${(props) => props.element_color};
  border-radius: 2px;
  border: 1px solid ${(props) => darkenColor(props.element_color)};
  width: 100%;
  height: 100%;
  padding: 4px;
`;

export const LanthanideActinideWrapper = styled(Box)`
  width: calc(100% / 18);
  height: 50%;
  min-width: calc(${tableWidth}px / 18);
  position: absolute;
  top: ${(props) => (100 / 10) * (props.row - 1)}%;
  left: ${(props) => (100 / 18) * (props.column - 1)}%;
  padding: 2px;
`;

export const LanthanideActinideText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 20%;
  padding-top: 12px;
  padding-right: 6px;
  font-size: 20px;
`;

export const LanthanideActinideSubText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20%;
  font-size: 12px;
`;
