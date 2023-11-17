/* eslint-disable react/prop-types */
import { Tooltip } from "@mui/material";
import {
  ElementWrapper,
  ElementBox,
  ElementNumber,
  ElementName,
  ElementSymbol,
  ElementWeight,
} from "./styledComponents";

function OneElement({
  element,
  hoveredTypes,
  selectedElement,
  setSelectedElement,
  currentQuiz,
  setQuizAnswer,
}) {
  const typeColor = element.type?.color || "#EEEEEE";
  const isAnyHover = hoveredTypes.length > 0;
  let color = !isAnyHover
    ? typeColor
    : hoveredTypes.includes(element.type?.id)
    ? typeColor
    : "#FFFFFF";

  let { id, symbol, name, weight } = element;

  if (currentQuiz) {
    if (currentQuiz.settings.showId !== "answer") id = "";
    if (currentQuiz.settings.showSymbol !== "answer") symbol = "";
    if (currentQuiz.settings.showName !== "answer") name = "";
    if (currentQuiz.settings.showWeight !== "answer") weight = "";
    if (currentQuiz.settings.showType !== "answer") color = "#FFFFFF";
  }

  let answeredType;

  if (currentQuiz) {
    let question = currentQuiz.questions[currentQuiz.currentQuestion];
    if (!question) {
      question = currentQuiz.questions[currentQuiz.viewQuestion];
    }
    if (question) {
      if (question.answers.find((answer) => answer.id === element.id)) {
        answeredType =
          question.question.id === element.id ? "success" : "error";
      } else if (
        currentQuiz.viewQuestion !== null &&
        question.question.id === element.id
      ) {
        answeredType = "success";
      }
    }
  }

  return (
    <ElementWrapper key={element.id} row={element.row} column={element.column}>
      <ElementBox
        is_selected={+(selectedElement?.id === element.id && !currentQuiz)}
        element_color={color}
        answered_type={answeredType}
        onClick={() => {
          if (!currentQuiz) {
            return setSelectedElement(element);
          }
          if (
            !answeredType &&
            currentQuiz.currentQuestion < currentQuiz.questions.length
          ) {
            return setQuizAnswer(element);
          }
        }}
      >
        <ElementNumber>{id}</ElementNumber>
        <ElementSymbol>{symbol}</ElementSymbol>
        {name ? (
          <Tooltip title={name} enterDelay={500}>
            <ElementName>{name}</ElementName>
          </Tooltip>
        ) : (
          <ElementName>{name}</ElementName>
        )}

        <ElementWeight>{weight}</ElementWeight>
      </ElementBox>
    </ElementWrapper>
  );
}

export default OneElement;
