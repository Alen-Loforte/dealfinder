export function dateSpliter(date) {
  // Converting from unix to normal date
  const temp = new Date(date * 1000);
  const convertedDate =
    temp.getDay() + "/" + temp.getMonth() + "/" + temp.getFullYear();

  return convertedDate;
}
