import React from "react";
import PropTypes from "prop-types";
import Select from "../common/select";

const sortOptions = [
  { id: "match ", label: "Best match" },
  { id: "stars desc", label: "Most Stars" },
  { id: "stars asc", label: "Fewest Stars" },
  { id: "fork desc", label: "Most Fork" },
  { id: "fork asc", label: "Fewest Fork" },
  { id: "updated desc", label: "Recently updated " },
  { id: "updated asc", label: "Least recently updated" },
];

const rowPerPageOptions = [
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
  return (
    <div className="row  ml-md-3 mr-md-3">
      {repo?.total_count ? (
        <>
          <h4 className="text-truncate ml-1 mr-2">
            Showing {repo.total_count?.toLocaleString()} available repositary
            results
          </h4>
          <div className="ml-auto d-flex">
            
            <Select
              name="sort"
              options={sortOptions}
              onChange={onChange}
              value={`${sort} ${order}`}
            />
            <Select
              name="rowPerPage"
              options={rowPerPageOptions}
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
SearchResultToolbar.propTypes = {
  repo: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
  onRowPerPageSelect: PropTypes.func.isRequired,
  rowPerPage: PropTypes.number.isRequired,
};

export default SearchResultToolbar;
