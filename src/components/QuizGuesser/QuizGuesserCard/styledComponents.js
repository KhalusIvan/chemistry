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
  cursor: pointer;
`;

export const QuizGuesserNumber = styled.div`
  font-size: 30px;
  line-height: 42px;
  height: 42px;
`;

export const QuizGuesserSymbol = styled.div`
  font-size: 46px;
  line-height: 58px;
  font-weight: 600;
  height: 58px;
`;

export const QuizGuesserName = styled.div`
  font-size: 26px;
  line-height: 36px;
  height: 36px;
`;

export const QuizGuesserWeight = styled.div`
  font-size: 26px;
  line-height: 36px;
  height: 36px;
`;

export const QuizGuesserElectron = styled.div`
  font-size: 20px;
  line-height: 25px;
  text-align: right;
  height: 25px;
`;
