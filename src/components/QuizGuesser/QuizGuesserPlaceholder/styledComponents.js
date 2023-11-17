import { styled } from "styled-components";
import { Box } from "@mui/material";
import { darkenColor } from "@helpers/colorHelper";

export const QuizGuesserBox = styled(Box)`
  background-color: ${(props) => props.element_color};
  border-radius: 2px;
  border: 4px solid ${(props) => darkenColor(props.element_color)};
  width: 200px;
  height: 200px;
  padding: 8px;
  transition: background-color 0.35s;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const QuizGuesserPlaceholderText = styled.div`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;
