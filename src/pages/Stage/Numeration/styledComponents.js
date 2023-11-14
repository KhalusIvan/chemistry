import { Box } from "@mui/material";
import { styled } from "styled-components";
import { tableHeight, tableWidth } from "@constants";

export const TableColumnWrapper = styled.div`
  position: relative;
  width: 20px;
  height: ${tableHeight}px;
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
  position: relative;
  width: 80%;
  height: 30px;
  min-width: ${tableWidth}px;
  margin-left: 20px;
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
