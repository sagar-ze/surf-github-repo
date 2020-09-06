export const getQueryParams = (location) => {
  const params = new URLSearchParams(location.search);
  const repoPerPage = params.get("per_page");
  const sortBy = params.get("stars");
  const orderBy = params.get("order");

  return {
    q: params.get("q"),
    page: params.get("page"),
    per_page: repoPerPage ? repoPerPage : 20,
    sort: sortBy ? sortBy : "match",
    order: orderBy ? orderBy : "",
  };
};
