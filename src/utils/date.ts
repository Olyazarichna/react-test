
const formatTwoDigits = (value: number) => value.toString().padStart(2, "0");

export const toDateInput = (date: Date): string =>
  `${date.getFullYear()}-${formatTwoDigits(date.getMonth() + 1)}-${formatTwoDigits(date.getDate())}`;

export const toTimeInput = (date: Date): string =>
  `${formatTwoDigits(date.getHours())}:${formatTwoDigits(date.getMinutes())}`;

export const combineDateAndTime = (date: string, time: string): string => {
  const [year, month, day] = date.split("-").map(Number);
  const [hours, minutes] = time.split(":").map(Number);
  return new Date(year, month - 1, day, hours, minutes).toISOString();
};

export const startOfToday = (): Date => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
};
