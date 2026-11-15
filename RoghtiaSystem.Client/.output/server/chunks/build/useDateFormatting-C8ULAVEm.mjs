globalThis.__timing__.logStart('Load chunks/build/useDateFormatting-C8ULAVEm');import { today } from '@internationalized/date';

const DATE_LOCALE = "en-US-u-ca-gregory-nu-latn";
const localNumber = (value) => String(value).replace(/[۰-۹]/g, (digit) => "0123456789"["۰۱۲۳۴۵۶۷۸۹".indexOf(digit)]);
const gregorianToday = () => today("Asia/Kabul");
const formatMonth = (date) => new Intl.DateTimeFormat(DATE_LOCALE, {
  month: "long",
  timeZone: "Asia/Kabul"
}).format(date.toDate("Asia/Kabul"));
const formatDate = (date, weekday = false) => {
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
const formatDateTime = (utc) => {
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
  const dateText = `${localNumber(part("year"))}/${localNumber(part("month"))}/${localNumber(part("day"))}`;
  return `${dateText}, ${localNumber(part("hour"))}:${localNumber(part("minute"))}`;
};
const formatTime = (date) => new Intl.DateTimeFormat(DATE_LOCALE, {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "Asia/Kabul"
}).format(date);

export { formatDate as a, formatTime as b, formatMonth as c, formatDateTime as f, gregorianToday as g, localNumber as l };;globalThis.__timing__.logEnd('Load chunks/build/useDateFormatting-C8ULAVEm');
//# sourceMappingURL=useDateFormatting-C8ULAVEm.mjs.map
