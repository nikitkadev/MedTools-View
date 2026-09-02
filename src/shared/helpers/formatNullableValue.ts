export const formatNullableValue = (value: string | number | null): string => {
  if (value === null) {
    return "—";
  }

  return value.toString();
};
