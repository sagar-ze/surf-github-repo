import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { fetchRepoReadme, fetchRepoInfo } from "../../services/repoService";
// import Markdown from "react-markdown/with-html";
import Markdown from 'markdown-to-jsx';
import RepoInfoList from "./repoInfoList";

function LinkRenderer(props) {
  return (
    <a href={props.href} target="_blank">
      {props.children}
    </a>
  );
}

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
  }, []);
  console.log("Repo detail", repoDetail);
  return (
    <div className="p-md-4 row">
      {repoDetail ? (
        <>
          <div className="col-md-2">
            <RepoInfoList repoDetail={repoDetail} />
          </div>
          <div className="col-md-9">
            <div className="shadow-lg p-md-5">
              <Markdown
                // source={atob(readme)}
                // escapeHtml={false}
                 renderers={{ link: LinkRenderer }}
                children={atob(readme)}
              />
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
