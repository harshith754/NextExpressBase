import { add, format } from "date-fns";

export function previousMonth(setCurrentMonth, firstDayCurrentMonth) {
  let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
  setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
}

export function nextMonth(setCurrentMonth, firstDayCurrentMonth) {
  let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
  setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
}
