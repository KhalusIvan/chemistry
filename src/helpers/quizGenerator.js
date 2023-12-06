import { elements } from "@constants";

export const generateQuiz = (quiz) => {
  const amount = quiz.numberOfQuestions;
  const allElements = JSON.parse(JSON.stringify(elements));
  const questions = [];

  for (let i = 1; i <= amount; i++) {
    const random = Math.pow(Math.random(), 1.5);
    const elementIndex = Math.floor(random * allElements.length);
    questions.push({
      question: allElements[elementIndex].id,
      answers: [],
    });
    allElements.splice(elementIndex, 1);
  }

  return questions;
};
