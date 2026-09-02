const rubFormatter = Intl.NumberFormat("ru", {
  style: "currency",
  currency: "RUB",
});

export const formatCurrency = (value: number | null): string => {
  return value === null ? "—" : rubFormatter.format(value);
};
