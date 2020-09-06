import React from "react";
import { useLocation } from "react-router-dom";
const SearchResult = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  // console.log("Params are", params.get("query"));
  return (
    <div>
      <p>hello</p>
    </div>
  );
};

export default SearchResult; 
