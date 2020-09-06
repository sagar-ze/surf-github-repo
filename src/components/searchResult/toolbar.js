import React from "react";
import Select from "../common/select";
import { getSortOptions } from "../../services/sortOptions";

const orderArr = [
  { id: "asc", label: "Asc" },
  { id: "desc", label: "Desc" },
];
const SearchResultToolbar = ({
  repo,
  onChange,
  onOrderChange,
  order,
  sort,
}) => {
  return (
    <div className="row mt-3">
      {repo?.total_count ? (
        <>
          <h4>
            Showing {repo.total_count?.toLocaleString()} available repositary
            results
          </h4>
          <div className="ml-auto d-flex">
            <Select
              name="sort"
              options={getSortOptions()}
              onChange={onChange}
              value={sort}
            />
          </div>
          {sort !== "match" ? (
            <div className="ml-3">
              <Select
                name="order"
                options={orderArr}
                onChange={onOrderChange}
                value={order}
              />
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchResultToolbar;
