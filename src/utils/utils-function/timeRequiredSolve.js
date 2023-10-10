function timeRequiredSolve(str) {
  if (str === "just added") {
    return "immediately";
  } else {
    const finishedDate = str.slice(5, -3);
    return finishedDate;
  }
}
export default timeRequiredSolve;
