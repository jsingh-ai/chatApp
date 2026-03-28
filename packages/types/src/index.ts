export interface PaginationQuery {
  cursor?: string;
  limit?: number;
}

export interface ApiSuccessEnvelope<T> {
  data: T;
  timestamp: string;
}
