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
  padding: 3px;
`;

const answerTypeToShadow = {
  error: "#fa4a43",
  success: "#10d102",
};

export const ElementBox = styled(Box)`
  background-color: ${(props) => props.element_color};
  border-radius: 2px;
  border: 1px solid
    ${(props) =>
      props.answered_type ? "black" : darkenColor(props.element_color)};
  width: 100%;
  height: 100%;
  padding: 4px;
  transition: background-color 0.35s;
  cursor: pointer;
  ${(props) =>
    props.answered_type
      ? `box-shadow: ${
          answerTypeToShadow[props.answered_type]
        } 0px 0px 0px 3px ;`
      : ""}

  ${(props) =>
    props.is_selected ? `box-shadow: #025afd 0px 0px 0px 3px;` : ""}

  &:hover {
    border: 3px solid ${(props) => darkenColor(props.element_color, 0.4)};
    padding: 2px;
  }

  &:active {
    background-color: ${(props) => darkenColor(props.element_color, 0.08)};
  }
`;

export const ElementNumber = styled.div`
  font-size: 12px;
  line-height: 14px;
  height: 14px;
`;

export const ElementSymbol = styled.div`
  font-size: 18px;
  line-height: 20px;
  font-weight: 600;
  height: 20px;
`;

export const ElementName = styled.div`
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 13px;
`;

export const ElementWeight = styled.div`
  font-size: 11px;
  line-height: 13px;
  height: 13px;
`;
