import dayjs from "dayjs";

const formatDate = (date: string): string => {
  if (/^[^/]+\/[^/]+\/[^/]+$/.test(date)) {
    return dayjs(date, "YYYY/M/D").format("MMM. YYYY");
  } else if (/^[^/]+\/[^/]+$/.test(date)) {
    return dayjs(date, "YYYY/M").format("MMM. YYYY");
  } else {
    throw new Error("Invalid date format");
  }
};

export default formatDate;
