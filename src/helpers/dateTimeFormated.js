export const dateFormated = (date) => {
	const d = new Date(date);
	const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
	const mo = new Intl.DateTimeFormat("en", { month: "long" }).format(d);
	const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
	const nextDate = `${da} ${mo} ${ye}`;
	return nextDate;
};

export const daysFormated = (endDate) => {
	const startDate = new Date();
	const dateFormat = 1000 * 60 * 60 * 24;
	const days = Math.floor((startDate - endDate) / dateFormat);
	return days;
};