const CategoryIds = [
  "default",
  "patient",
  "case-details",
  "oncology",
  "referrals",
  "clinical-groups",
  "provided-services",
  "defects",
] as const;

export type CategoryId = (typeof CategoryIds)[number];
