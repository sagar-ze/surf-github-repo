import http from "./httpService";
import { searchEndpoint } from "../config/endPoints";

export const getRepositories = (query, page, per_page, sort, order) =>
  http.get(
    `${searchEndpoint}?q=${query}&sort=${sort}&order=${order}&per_page=${per_page}&page=${page}`
  );
