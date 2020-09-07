import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { fetchRepoReadme } from "../../services/repoService";
import Markdown from "react-markdown/with-html";

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
  const [error, setError] = React.useState("");

  console.log("Location", location, "Params", params);

  React.useEffect(() => {
    async function fetchRepoDetail() {
      try {
        const { data } = await fetchRepoReadme(location.pathname);
        setReadme(data.content);
        console.log(data);
      } catch (ex) {
        setError(ex.message);
      }
    }
    fetchRepoDetail();
  }, []);
  return (
    <div className="p-md-5">
      <div className="shadow-lg p-md-5">
        <Markdown
          source={atob(readme)}
          escapeHtml={false}
          renderers={{ link: LinkRenderer }}
        />
      </div>
    </div>
  );
};

export default RepoDetail;
