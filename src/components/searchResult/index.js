import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { getQueryParams } from "../../utils/searchQuery";
import { fetchRepositories } from "../../services/repoService";
import { repoSearch } from "../../config/pathname";
import Spinner from "../common/spinner";
import Card from "./card";
import SearchResultToolbar from "./toolbar";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

const SearchResult = () => {
  const history = useHistory();
  const location = useLocation();
  const [loading, setLoading] = React.useState(false);
  const [repo, setRepo] = React.useState({});
  const [options, setOptions] = React.useState({
    sort: "asc",
    order: "desc",
    page: 1,
    rowsPerPage: 15,
  });
  const [error, setError] = React.useState("");

  const query = getQueryParams(location).q;

  React.useEffect(() => {
    async function fetchRepo() {
      setLoading(true);
      try {
        const { q, page, per_page, sort, order } = getQueryParams(location);
        const { data } = await fetchRepositories(q,page,per_page,sort,order);
        const state = { ...options };
        state.sort = sort;
        state.order = order;
        state.rowsPerPage = per_page;
        setRepo(data);
        setOptions(state);
      } catch (ex) {
        setError(ex.message);
      }
      setLoading(false);
    }
    fetchRepo();
  }, [location, error]);

  const handlePageChange = (currPage) => {
    const state = { ...options };
    state.page = currPage;
    setOptions(state);
    history.push(
      repoSearch.param(
        query,
        state.page,
        state.rowsPerPage,
        state.sort,
        state.order
      )
    );
  };

  const handleSortOptionsSelect = ({ target }) => {
    const state = { ...options };
    const result = target.value.split(" ");
    state.order = result[1];
    state.sort = result[0];
    setOptions(state);
    history.push(
      repoSearch.param(
        query,
        state.page,
        state.rowsPerPage,
        state.sort,
        state.order
      )
    );
  };

  const handleRowPerPageSelect = ({ target }) => {
    const state = { ...options };
    state.rowsPerPage = target.value;
    setOptions(state);
    history.push(
      repoSearch.param(
        query,
        state.page,
        target.rowPerPage,
        state.sort,
        state.order
      )
    );
  };

  return (
    <div className="search-result-container pl-2 pr-1 ">
      {loading ? (
        <div className="d-flex justify-content-center align-items-center main-container">
          <Spinner />
        </div>
      ) : (
        <>
          <SearchResultToolbar
            onChange={handleSortOptionsSelect}
            onRowPerPageSelect={handleRowPerPageSelect}
            rowPerPage={options.rowsPerPage}
            order={options.order}
            sort={options.sort}
            repo={repo}
          />

          <div className="result-card-container m-md-3">
            {repo?.items?.map((item) => (
              <React.Fragment key={item.id}>
                <Card item={item} />
              </React.Fragment>
            ))}
          </div>

          <div className="m-md-5 float-right">
            <Pagination
              showSizeChanger
              defaultPageSize={options.rowsPerPage}
              defaultCurrent={options.page}
              onChange={handlePageChange}
              total={repo.total_count >= 1000 ? 1000 : repo.total_count}
            />
          </div>

          {repo.items?.length === 0 ? (
            <h4 className="d-flex justify-content-center align-items-center main-container">
              No repo found based on your query
            </h4>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
};

export default SearchResult;
