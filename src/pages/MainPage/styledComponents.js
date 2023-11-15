import { styled } from "styled-components";
import {
  tableHeight,
  tableWidth,
  tableColumnNumerationWidth,
  tableRowNumerationHeight,
} from "@constants";

export const PageWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const TableBlock = styled.div`
  width: calc(100% - 320px);
  max-height: 100vh;
  border: 1px solid black;
  background-color: #ffffff;
  overflow: auto;
`;

export const FullTableWrapper = styled.div`
  position: relative;
  width: 100%;
  height: ${tableHeight + tableRowNumerationHeight}px;
  min-width: ${tableWidth + tableColumnNumerationWidth}px;
`;

export const TableInfoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: ${tableHeight}px;
  min-width: ${tableWidth}px;
`;

export const SelectedElementBlock = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
