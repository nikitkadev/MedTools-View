const сategoryIds = [
  "default",
  "patient",
  "case-details",
  "oncology",
  "referrals",
  "clinical-groups",
  "provided-services",
  "defects",
] as const;

export type CategoryId = (typeof сategoryIds)[number];
