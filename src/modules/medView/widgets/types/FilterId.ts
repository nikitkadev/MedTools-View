const filterGroupIds = [
  "none",
] as const;

export type FilterGroupId = (typeof filterGroupIds)[number];
