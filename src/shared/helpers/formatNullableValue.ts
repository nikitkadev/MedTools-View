import dayjs from "dayjs";

export const formatNullableValue = (
  value: string | number | null,
  isDate?: boolean,
): string => {
  if (value === null) {
    return "—";
  }

  if (isDate) {
    return dayjs(value).format("DD.MM.YYYY");
  }

  return value.toString();
};
