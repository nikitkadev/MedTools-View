const filterGroupIds = ["none", "persons", "case-details"] as const;

export type FilterGroupId = (typeof filterGroupIds)[number];
