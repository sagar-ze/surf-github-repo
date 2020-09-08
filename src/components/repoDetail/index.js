import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import { toast } from "react-toastify";

import { fetchRepoReadme, fetchRepoInfo } from "../../services/repoService";
import RepoInfo from "./repoInfo";
import Spinner from "../common/spinner";

const RepoDetail = () => {
  const location = useLocation();
  const params = useParams();
  const [loading, setLoading] = React.useState(false);
  const [readme, setReadme] = React.useState("");
  const [repo, setRepo] = React.useState({});

  React.useEffect(() => {
    async function fetchRepo() {
      setLoading(true);
      try {
        const [readme, repoDetail] = await Promise.all([
          fetchRepoReadme(location.pathname),
          fetchRepoInfo(params.owner, params.repo),
        ]);
        setReadme(readme.data.content);
        setRepo(repoDetail.data);
      } catch (ex) {
        toast.error(ex.response.data.message);
      }
      setLoading(false);
    }
    fetchRepo();
  }, [location, params]);

  return (
    <div className="pl-2 pr-1 pt-md-5 row">
      {!loading ? (
        <>
          <div className="col-md-2">
            <RepoInfo repo={repo} />
          </div>
          <div className="col-md-9">
            <div className="shadow-lg p-md-5 readme-container overflow-hidden">
              <p className="font-weight-bold text-info">README.md</p>
              <Markdown children={atob(readme)} />
            </div>
          </div>
        </>
      ) : (
        <div className="m-auto mt-5">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default RepoDetail;
