import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { fetchRepoReadme } from "../../services/repoService";
const RepoDetail = () => {
  const location = useLocation();
  const params = useParams();

  console.log("Location", location, "Params", params);

  React.useEffect(() => {
    async function fetchRepoDetail() {
      const { data } =await fetchRepoReadme(location.pathname);
      console.log(data);
    }
    fetchRepoDetail();
  }, []);
  return (
    <h1>
      Hello Detail
      <p>HI</p>
    </h1>
  );
};

export default RepoDetail;
