import { Box } from "@mui/material";
import { styled } from "styled-components";
import {
  tableHeight,
  tableWidth,
  tableColumnNumerationWidth,
  tableRowNumerationHeight,
} from "@constants";

export const TableColumnWrapper = styled.div`
  position: sticky;
  width: ${tableColumnNumerationWidth}px;
  height: ${tableHeight}px;
  left: 0;
  z-index: 999;
  background-color: #ffffff;
`;

export const TableColumnBox = styled(Box)`
  width: 100%;
  height: 10%;
  position: absolute;
  top: ${(props) => (100 / 10) * (props.row - 1)}%;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 20px;
`;

export const TableRowWrapper = styled.div`
  position: sticky;
  width: calc(100% - ${tableColumnNumerationWidth}px);
  height: ${tableRowNumerationHeight}px;
  min-width: ${tableWidth}px;
  margin-left: ${tableColumnNumerationWidth}px;
  top: 0;
  z-index: 999;
  background-color: #ffffff;
`;

export const TableRowBox = styled(Box)`
  width: calc(100% / 18);
  height: 100%;
  min-width: calc(${tableWidth}px / 18);
  position: absolute;
  left: ${(props) => (100 / 18) * (props.column - 1)}%;
  padding: 4px;
  display: flex;
  justify-content: center;
  font-size: 20px;
`;
