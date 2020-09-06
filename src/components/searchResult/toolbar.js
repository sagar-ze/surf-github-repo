import React from "react";
import Select from "../common/select";
import { getSortOptions } from "../../services/sortOptions";

const filterOptions = [
  { id: 10, label: "10 repo per Page" },
  { id: 15, label: "15 repo per Page" },
  { id: 50, label: "50 repo per page" },
];
const SearchResultToolbar = ({
  repo,
  onChange,
  order,
  sort,
  onRowPerPageSelect,
  rowPerPage,
}) => {
    console.log('Row per apge is',rowPerPage)
  return (
    <div className="row mt-3 ml-md-3 mr-md-3">
      {repo?.total_count ? (
        <>
          <h4 className="d-none d-sm-block">
            Showing {repo.total_count?.toLocaleString()} available repositary
            results
          </h4>
          <div className="ml-auto d-flex">
            <Select
              name="sort"
              options={getSortOptions()}
              onChange={onChange}
              value={`${sort} ${order}`}
            />
            <Select
              name="rowPerPage"
              options={filterOptions}
              onChange={onRowPerPageSelect}
              value={rowPerPage}
            />
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchResultToolbar;
