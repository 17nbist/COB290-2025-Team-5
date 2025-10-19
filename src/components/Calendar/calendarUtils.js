export function daysInMonth(d) {
  let lastDate = new Date(d);
  lastDate.setMonth(lastDate.getMonth() + 1);
  lastDate.setDate(0);
  return lastDate.getDate();
}

export function monthsBetween(start, end) {
  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();
  const days = (end.getDate() - start.getDate()) / daysInMonth(start); // fractional month
  return years * 12 + months + days;
}

export function firstDateOfWeek(d) {
  let date = new Date(d)
  date.setHours(0, 0, 0, 0);

  let dayOfWeek = date.getDay()
  const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  date.setDate(date.getDate() + diff);
  return date;
}
