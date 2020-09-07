import http from "./httpService";
import { searchEndpoint, repoEndpoint } from "../config/endPoints";

export const fetchRepositories = (query, page, per_page, sort, order) =>
  http.get(
    `${searchEndpoint}?q=${query}&sort=${sort}&order=${order}&per_page=${per_page}&page=${page}`
  );

export const fetchRepoReadme = (path) => http.get(path);

export const fetchRepoInfo = (owner, repo) =>
  http.get(`${repoEndpoint}/${owner}/${repo}`);
