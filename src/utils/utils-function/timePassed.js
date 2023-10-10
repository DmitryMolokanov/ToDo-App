function timePassed(date) {
  const newDate = Date.now() - date;
  const currentDate = newDate / 60000;
  if (currentDate < 1) {
    return `just added`;
  } else if (currentDate > 1 && currentDate < 60) {
    return `added ${Math.round(currentDate)} minute(s) ago`;
  } else if (currentDate > 60 && currentDate < 1440) {
    return `added more then ${Math.round(currentDate / 60)} hour(s) ago`;
  } else if (currentDate > 1440) {
    return `added more then ${Math.round(currentDate / 60 / 24)} day(s) ago`;
  }
}
export default timePassed;
