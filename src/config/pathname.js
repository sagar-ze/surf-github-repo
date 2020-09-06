export const mountPoint = "/";

export const notFound = "/not-found";

export const repoSearch = {
  path: "/search",
  param(query, page, per_page, sort, order) {
    return {
      pathname: this.path,
      search: `q=${query}&page=${page}&per_page=${per_page}&stars=${sort}&order=${order}`,
    };
  },
};
