export const getResultInPercents = (rightAnswers, numberOfQuestions) => {
  const percent = (rightAnswers * 100) / numberOfQuestions;
  const roundedPercent = parseFloat(percent.toFixed(2)).toString();
  return roundedPercent.endsWith(".00")
    ? roundedPercent.slice(0, -3)
    : roundedPercent;
};
