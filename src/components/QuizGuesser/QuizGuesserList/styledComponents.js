import { styled } from "styled-components";
import { darkenColor } from "@helpers/colorHelper";

const statusToBorderColor = {
  future: "#1a1a1a",
  current: "#3d56fc",
  error: "#fa4a43",
  success: "#10d102",
};

const statusToBackgroundColor = {
  future: "#ffffff",
  current: "#ffffff",
  error: "#ffbfbd",
  success: "#bef7ba",
};

export const QuestionBox = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-style: solid;
  border-width: ${(props) => (props.status === "future" ? 1 : 2)}px;
  border-color: ${(props) => statusToBorderColor[props.status]};
  background-color: ${(props) => statusToBackgroundColor[props.status]};
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.clickable ? "pointer" : "default")};
  ${(props) => (props.is_view ? `box-shadow: #8090ff 0px 0px 0px 3px ;` : "")}
  ${(props) =>
    props.clickable
      ? `
  &:hover {
    background-color: ${darkenColor(
      statusToBackgroundColor[props.status],
      0.08,
    )};
  }
  &:active {
    background-color: ${darkenColor(
      statusToBackgroundColor[props.status],
      0.2,
    )};
  }`
      : ""};
`;
