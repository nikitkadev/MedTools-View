const filterGroupIds = [
  "none",
  "persons",
  "case-details",
  "oncology",
  "prescriptions",
  "clinical-groups",
  "provided-services",
  "sanctions",
] as const;

export type FilterGroupId = (typeof filterGroupIds)[number];
