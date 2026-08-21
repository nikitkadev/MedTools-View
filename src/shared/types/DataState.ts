const DataStates = [
  "waiting",
  "error",
  "empty",
  "loading",
  "fetching",
  "success",
] as const;

export type DataState = (typeof DataStates)[number];
