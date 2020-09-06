import React from "react";
import Select from "../common/select";
import { getSortOptions } from "../../services/sortOptions";

const SearchResultToolbar = ({ repo, onChange, order, sort }) => {
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
              name="repo"
              options={getSortOptions()}
              onChange={onChange}
              value={`${sort} ${order}`}
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
