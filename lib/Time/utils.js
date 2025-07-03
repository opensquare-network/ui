import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

export function timeDuration(time) {
  if (!time) {
    return "Unknown time";
  }
  dayjs.updateLocale("en", {
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "secs",
      ss: "%ds",
      m: "1min",
      mm: "%dmin",
      h: "1h",
      hh: "%dhrs",
      d: "1d",
      dd: "%dd",
      M: "1mo",
      MM: "%dmos",
      y: "1y",
      yy: "%dy",
    },
  });
  const now = dayjs();
  if (!now.isAfter(time)) {
    return dayjs(time).fromNow();
  }
  let ss = now.diff(time, "seconds");
  let ii = now.diff(time, "minutes");
  let hh = now.diff(time, "hours");
  let dd = now.diff(time, "days");
  let mm = now.diff(time, "months");
  let yy = now.diff(time, "years");
  if (yy) {
    return `${yy}y ago`;
  }
  if (mm) {
    return `${mm}mo ago`;
  }
  if (dd) {
    return `${dd}d ago`;
  }
  if (hh) {
    return `${hh}h ago`;
  }
  if (ii) {
    return `${ii}min ago`;
  }
  return `${ss}s ago`;
}
