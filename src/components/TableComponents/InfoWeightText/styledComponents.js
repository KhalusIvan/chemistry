import { Box } from "@mui/material";
import { tableWidth } from "@constants";
import { styled } from "styled-components";

export const ElementBox = styled(Box)`
  border-radius: 2px;
  width: 100%;
  height: 100%;
  padding: 4px;
`;

export const InfoWeightWrapper = styled(Box)`
  width: calc(100% / 18 * 15);
  height: 10%;
  min-width: calc(${tableWidth}px / 18 * 15);
  position: absolute;
  top: ${(props) => (100 / 10) * (props.row - 1)}%;
  left: ${(props) => (100 / 18) * (props.column - 1)}%;
  padding: 2px;
`;

export const InfoWeightStyledText = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  height: 100%;
`;
