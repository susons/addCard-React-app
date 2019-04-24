const monthNames = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August', 'September',
  'October', 'November', 'December'
];
export const formatDate = (timeStamp) => {
  const timeValue = new Date(timeStamp)
  return `${timeValue.getDate()} ${monthNames[timeValue.getMonth()]}`
}
;