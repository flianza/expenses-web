export class ApiResponse<TResponse> {
  count: number;
  next?: string;
  previous?: string;
  results: TResponse[];
}
