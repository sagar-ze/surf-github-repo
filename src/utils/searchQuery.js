export const getQueryParams = (location) => {
  const params = new URLSearchParams(location.search);
  return {
    q: params.get("query"),
    page: params.get("page"),
    per_page: params.get("per_page"),
    sort: params.get("sort"),
    order: params.get("order"),
  };
};
