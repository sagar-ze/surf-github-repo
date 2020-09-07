import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import Pagination from "rc-pagination";
import { toast } from "react-toastify";
import { getQueryParams } from "../../utils/searchQuery";
import { fetchRepositories } from "../../services/repoService";
import { repoSearch } from "../../config/pathname";
import Spinner from "../common/spinner";
import Card from "./card";
import SearchResultToolbar from "./toolbar";
import "rc-pagination/assets/index.css";

const pushHistory = ( state, history) =>
  history.push(
    repoSearch.param(
      state.query,
      state.page,
      state.rowsPerPage,
      state.sort,
      state.order
    )
  );

const SearchResult = () => {
  const history = useHistory();
  const location = useLocation();
  const [loading, setLoading] = React.useState(false);
  const [repo, setRepo] = React.useState({});
  const [options, setOptions] = React.useState({
    query:'',
    sort: "match",
    order: "",
    page: 1,
    rowsPerPage: 15,
  });

  React.useEffect(() => {
    async function fetchRepo() {
      setLoading(true);
      try {
        const { q, page, per_page, sort, order } = getQueryParams(location);
        const { data } = await fetchRepositories( q, page, per_page, sort, order);
        const state = { ...options };
        state.query=q;
        state.sort = sort;
        state.order = order;
        state.page=page;
        state.rowsPerPage = parseInt(per_page);
        setRepo(data);
        setOptions(state);
      } catch (ex) {
        toast.error(`😢  ${ex.response.data.message} `);
      }
      setLoading(false);
    }
    fetchRepo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const handlePageChange = (currPage) => {
    const state = { ...options };
    state.page = currPage;
    pushHistory(state, history);
  };

  const handleSortOptionsSelect = ({ target }) => {
    const state = { ...options };
    const result = target.value.split(" ");
    state.order = result[1];
    state.sort = result[0];
    pushHistory( state, history);
  };

  const handleRowPerPageSelect = ({ target }) => {
    const state = { ...options };
    state.rowsPerPage = target.value;
    pushHistory(state, history);
  };

  return (
    <div className="pl-2 pr-1 pt-5">
      {loading ? (
        <div className="d-flex justify-content-center align-items-center ">
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
                <Card repo={item} />
              </React.Fragment>
            ))}
          </div>

          <div className="m-md-5 float-right">
            {repo.total_count > options.rowsPerPage ? (
              <Pagination
                showSizeChanger
                defaultPageSize={options.rowsPerPage}
                defaultCurrent={options.page}
                onChange={handlePageChange}
                total={repo.total_count >= 1000 ? 1000 : repo.total_count}
              />
            ) : (
              ""
            )}
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
