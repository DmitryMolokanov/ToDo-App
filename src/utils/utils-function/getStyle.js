function getStyle(task) {
  if (task.priority === "high") return "rgb(249, 189, 175)";
  if (task.priority === "medium") return "rgb(177, 200, 245)";
  if (task.priority === "low") return "rgb(198, 243, 217)";
}
export default getStyle;
