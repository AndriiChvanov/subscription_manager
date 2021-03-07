export const dateFormated = (date) => {
  const d = new Date(date);
  const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
  const mo = new Intl.DateTimeFormat("en", { month: "long" }).format(d);
  const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
  const nextDate = `${da} ${mo} ${ye}`;
  return nextDate;
};
export const dateFormatedPicker = (date) => {
  const d = new Date(date);
  const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
  const mo = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(d);
  const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
  const nextDate = `${ye}-${mo}-${da}`;
  return nextDate;
};

export const daysFormat = (endDate) => {
  const startDate = new Date();
  const dateFormat = 1000 * 60 * 60 * 24;
  const days = Math.floor((endDate - startDate) / dateFormat);
  return days;
};
export const dateFormatToday = () => {
  const d = new Date();
  const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
  const mo = new Intl.DateTimeFormat("en", { month: "long" }).format(d);
  const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
  const nextDate = `${da} ${mo} ${ye}`;
  return nextDate;
};
export const dateFormatMonth = () => {
  const d = new Date();
  const mo = new Intl.DateTimeFormat("en", { month: "long" }).format(d);
  const nextDate = `${mo}`;
  return nextDate;
};
export const changeMonthToShort = (monthLong) => {
  if (monthLong === "January") {
    return "JAN";
  }
  if (monthLong === "February") {
    return "FEB";
  }
  if (monthLong === "March") {
    return "MAR";
  }
  if (monthLong === "April") {
    return "APR";
  }
  if (monthLong === "May") {
    return "MAY";
  }
  if (monthLong === "June") {
    return "JUN";
  }
  if (monthLong === "July") {
    return "JUL";
  }
  if (monthLong === "August") {
    return "AUG";
  }
  if (monthLong === "September") {
    return "SEP";
  }
  if (monthLong === "October") {
    return "OCT";
  }
  if (monthLong === "November") {
    return "NOV";
  }
  if (monthLong === "December") {
    return "DEC";
  }
};
