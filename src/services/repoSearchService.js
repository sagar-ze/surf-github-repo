import http from "./httpService";
import { searchEndpoint } from "../config/endPoints";

export const getRepositories = (params) => http.get(searchEndpoint, { params });
