export const mountPoint = "/";

export const notFound = "/not-found";

export const repoSearch = {
  path: "/search",
  param: function (query, page, per_page, sort, order) {
    return {
      pathname: this.path,
      search: `query=${query}&page=${page}&per_page=${per_page}&sort=${sort}&order=${order}`,
    };
  },
};
