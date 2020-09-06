import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { getQueryParams } from "../../utils/searchQuery";
import { getRepositories } from "../../services/repoSearchService";
import { repoSearch } from "../../config/pathname";
import Spinner from "../common/spinner";
import Card from "./card";
import SearchResultToolbar from "./toolbar";
import Pagination from "../common/pagination";

const SearchResult = () => {
  const history = useHistory();
  const location = useLocation();
  const [loading, setLoading] = React.useState(false);
  const [repo, setRepo] = React.useState({});
  const [sort, setSort] = React.useState("match");
  const [order, setOrder] = React.useState("desc");
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);
  const [error, setError] = React.useState("");

  const query = getQueryParams(location).q;

  React.useEffect(() => {
    async function fetchRepo() {
      setLoading(true);
      try {
        const { q, page, per_page, sort, order } = getQueryParams(location);
        const { data } = await getRepositories(q, page, per_page, sort, order);
        setRepo(data);
        if (error) setError("");
      } catch (ex) {
        setError(ex.message);
      }
      setLoading(false);
    }
    fetchRepo();
  }, [location, error]);

  const handlePageChange = (currPage) => {
    setPage(currPage);
    history.push(repoSearch.param(query, currPage, rowsPerPage, sort, order));
  };

  const handleSortOptionsSelect = ({ target }) => {
    const result = target.value.split(" ");
    const sortBy = result[0];
    const orderBy = result[1];
    setSort(sortBy);
    setOrder(orderBy);
    history.push(repoSearch.param(query, page, rowsPerPage, sortBy, orderBy));
  };

  const handleRowPerPageSelect = ({ target }) => {
    setRowsPerPage(target.value);
    history.push(repoSearch.param(query, page, target.value, sort, order));
  };

  return (
    <div className="searchResultContainer pl-2 pr-1 ">
      {loading ? (
        <div className="d-flex justify-content-center align-items-center mainContainer">
          <Spinner />
        </div>
      ) : (
        <>
          <SearchResultToolbar
            onChange={handleSortOptionsSelect}
            onRowPerPageSelect={handleRowPerPageSelect}
            rowPerPage={rowsPerPage}
            order={order}
            sort={sort}
            repo={repo}
          />
          <div className="resultCardContainer">
            {repo?.items?.map((item) => (
              <React.Fragment key={item.id}>
                <Card item={item} />
              </React.Fragment>
            ))}
          </div>
          <div className="mr-5 mt-3 float-right">
            <Pagination
              itemsCount={repo.total_count}
              pageSize={rowsPerPage}
              currentPage={page}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      )}
      {error ? (
        <h4 className="d-flex justify-content-center align-items-center mainContainer">
          You either tried some shady route or you came here by mistake.
          <br />
          Whichever it is,try using the navaigation
        </h4>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchResult;
