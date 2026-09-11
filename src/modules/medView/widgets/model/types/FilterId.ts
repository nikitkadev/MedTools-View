const filterGroupIds = [
  "none",
  "persons",
  "case-details",
  "oncology",
  "prescriptions",
] as const;

export type FilterGroupId = (typeof filterGroupIds)[number];
