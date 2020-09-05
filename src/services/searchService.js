import http from "./httpService";
import { repoSearchEndpoint } from "../config/endPoints";

export const getRepositories = (queryParam) =>
  http.get(repoSearchEndpoint, {
    params: { q: queryParam, page: 1, per_page: 100 },
  });
