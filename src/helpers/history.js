export const getHistory = () => {
  let history = localStorage.getItem("quizHistory");
  if (history) {
    return JSON.parse(history);
  }
  return [];
};
