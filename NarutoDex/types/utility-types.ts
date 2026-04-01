export type EraRecord = Record<string, string>;

export type OneOrMany<T> = T | T[];

export interface PaginatedResponse {
  currentPage: number;
  pageSize: number;
  total: number;
}
