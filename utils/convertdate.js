function convertUtcDateToLocal(utcDateString) {
  const utcDate = new Date(utcDateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    timeZoneName: "short",
  };
  const dateFormatter = new Intl.DateTimeFormat("en-US", options);
  const formattedDate = dateFormatter.format(utcDate);
  return formattedDate;
}

export default convertUtcDateToLocal;
