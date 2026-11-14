globalThis.__timing__.logStart('Load chunks/build/useDateFormatting-PLtQ78bC');import { today } from '@internationalized/date';

// app/composables/useDateFormatting.ts
var DATE_LOCALE = "en-US-u-ca-gregory-nu-latn";
var WEEKDAY_SHORT_LABELS = {
	Sunday: "Sun",
	Monday: "Mon",
	Tuesday: "Tue",
	Wednesday: "Wed",
	Thursday: "Thu",
	Friday: "Fri",
	Saturday: "Sat"
};
var localNumber = (value) => String(value).replace(/[۰-۹]/g, (digit) => "0123456789"["۰۱۲۳۴۵۶۷۸۹".indexOf(digit)]);
var gregorianToday = () => today("Asia/Kabul");
var formatMonth = (date) => new Intl.DateTimeFormat(DATE_LOCALE, {
	month: "long",
	timeZone: "Asia/Kabul"
}).format(date.toDate("Asia/Kabul"));
var formatDate = (date, weekday = false) => {
	const options = {
		year: "numeric",
		month: "numeric",
		day: "numeric",
		...weekday ? { weekday: "long" } : {},
		timeZone: "Asia/Kabul"
	};
	const parts = new Intl.DateTimeFormat(DATE_LOCALE, options).formatToParts(date.toDate("Asia/Kabul"));
	const part = (type) => parts.find((value) => value.type === type)?.value ?? "";
	const dateText = `${localNumber(part("year"))}/${localNumber(part("month"))}/${localNumber(part("day"))}`;
	return weekday ? `${part("weekday")}, ${dateText}` : dateText;
};
var formatDateTime = (utc) => {
	const date = new Date(utc);
	if (Number.isNaN(date.getTime())) return "";
	const parts = new Intl.DateTimeFormat(DATE_LOCALE, {
		year: "numeric",
		month: "numeric",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
		timeZone: "Asia/Kabul"
	}).formatToParts(date);
	const part = (type) => parts.find((value) => value.type === type)?.value ?? "";
	return `${`${localNumber(part("year"))}/${localNumber(part("month"))}/${localNumber(part("day"))}`}, ${localNumber(part("hour"))}:${localNumber(part("minute"))}`;
};
var formatTime = (date) => new Intl.DateTimeFormat(DATE_LOCALE, {
	hour: "2-digit",
	minute: "2-digit",
	hour12: false,
	timeZone: "Asia/Kabul"
}).format(date);

export { DATE_LOCALE as D, WEEKDAY_SHORT_LABELS as W, formatDate as a, formatMonth as b, formatTime as c, formatDateTime as f, gregorianToday as g, localNumber as l };;globalThis.__timing__.logEnd('Load chunks/build/useDateFormatting-PLtQ78bC');
//# sourceMappingURL=useDateFormatting-PLtQ78bC.mjs.map
