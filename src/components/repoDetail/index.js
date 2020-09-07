import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { fetchRepoReadme, fetchRepoInfo } from "../../services/repoService";
import Markdown from "markdown-to-jsx";
import RepoInfoList from "./repoInfoList";

const RepoDetail = () => {
  const location = useLocation();
  const params = useParams();
  const [readme, setReadme] = React.useState("");
  const [repoDetail, setRepoDetail] = React.useState("");
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    async function fetchRepoDetail() {
      try {
        const [readme, repoDetail] = await Promise.all([
          fetchRepoReadme(location.pathname),
          fetchRepoInfo(params.owner, params.repo),
        ]);
        setReadme(readme.data.content);
        setRepoDetail(repoDetail.data);
      } catch (ex) {
        setError(ex.message);
      }
    }
    fetchRepoDetail();
  }, [location, params]);

  console.log("Error geting run details", error);

  return (
    <div className="p-md-4 row m-0">
      {repoDetail ? (
        <>
          <div className="col-md-2">
            <RepoInfoList repoDetail={repoDetail} />
          </div>
          <div className="col-md-9">
            <div className="shadow-lg p-md-5">
              <p className="font-weight-bold text-info">README.md</p>
              <Markdown children={atob(readme)} />
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default RepoDetail;
