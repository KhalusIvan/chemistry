import { Box } from "@mui/material";
import { tableWidth } from "@constants";
import { styled } from "styled-components";
import { darkenColor } from "@helpers/colorHelper";

export const ElementWrapper = styled(Box)`
  width: calc(100% / 18);
  height: 10%;
  min-width: calc(${tableWidth}px / 18);
  position: absolute;
  top: ${(props) => (100 / 10) * (props.row - 1)}%;
  left: ${(props) => (100 / 18) * (props.column - 1)}%;
  padding: 4px;
`;

export const ElementBox = styled(Box)`
  background: ${(props) => props.elementColor};
  border-radius: 2px;
  border: 1px solid ${(props) => darkenColor(props.elementColor)};
  width: 100%;
  height: 100%;
  padding: 4px;
`;

export const ElementNumber = styled.div`
  font-size: 14px;
  line-height: 16px;
`;

export const ElementSymbol = styled.div`
  font-size: 18px;
  line-height: 20px;
`;

export const ElementName = styled.div`
  font-size: 11px;
  line-height: 13px;
  letter-spacing: ${(props) => props.letterSpacing};
`;

export const ElementWeight = styled.div`
  font-size: 11px;
  line-height: 13px;
`;
