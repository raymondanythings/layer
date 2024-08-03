export const formatDateToString = (date: Date, separator: string = "-") => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}${separator}${month}${separator}${day}`;
};

export const formatTime12to24 = (time: string, isPm: boolean) => {
  if (time.indexOf(":") === -1) {
    throw new Error("time은 00:00 형태의 문자열만 허용합니다.");
  }

  const [hours12, minutes] = time.split(":");

  let hours = +hours12;

  if (isPm && +hours12 < 12) {
    hours += 12;
  } else if (!isPm && +hours12 === 12) {
    hours = 0;
  }

  return `${hours}:${minutes}`;
};

export const combineDateTimeToISOString = (date: Date, isPm: boolean, time: string) => {
  if (time.indexOf(":") === -1) {
    throw new Error("time은 00:00 형태의 string으로 전달되어야 합니다.");
  }

  const [hours, minutes] = formatTime12to24(time, isPm).split(":").map(Number);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return new Date(year, month, day, hours, minutes).toISOString();
};
