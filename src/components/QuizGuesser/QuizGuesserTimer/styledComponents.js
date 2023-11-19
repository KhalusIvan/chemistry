import { keyframes, styled } from "styled-components";

export const QuizGuesserTimerWrapper = styled.div`
  height: 16px;
  width: 100%;
  background-color: #eeeeee;
  border-radius: 8px;
  position: relative;
`;

const breatheAnimation = keyframes`
 0% { width: 100%;, background-color: #0ac200 }
 50% { width: 50%; background-color: #fac45f }
 100% { width: 0%; background-color: #cf0000 }
`;
export const QuizGuesserTimerLine = styled.div`
  height: 16px;
  width: 100%;
  background-color: #0ac200;
  border-radius: 8px;
  position: absolute;
  transition: width 1.5s;
  animation-name: ${breatheAnimation};
  animation-duration: ${(props) => props.question_time}s;
  animation-timing-function: linear;
`;
