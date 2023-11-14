import { styled } from "styled-components";
import { tableHeight, tableWidth } from "@constants";

export const FullTableWrapper = styled.div`
  position: relative;
  width: calc(80% + 20px);
  height: ${tableHeight}px;
  min-width: ${tableWidth + 20}px;
`;

export const TableInfoWrapper = styled.div`
  position: relative;
  width: 80%;
  height: ${tableHeight}px;
  min-width: ${tableWidth}px;
`;
