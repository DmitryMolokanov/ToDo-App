function getDate() {
  const curDate = new Date();
  const fullYear = curDate.getFullYear();
  const month =
    curDate.getMonth() > 9 ? curDate.getMonth() : `0${curDate.getMonth()}`;
  const date =
    curDate.getDate() > 9 ? curDate.getDate() : `0${curDate.getDate()}`;
  const hour =
    curDate.getHours() > 9 ? curDate.getHours() : `0${curDate.getHours()}`;
  const minutes =
    curDate.getMinutes() > 9
      ? curDate.getMinutes()
      : `0${curDate.getMinutes()}`;

  const dateStr = `${date}.${month}.${fullYear} at ${hour}:${minutes}`;
  return dateStr;
}
getDate();
export default getDate;
