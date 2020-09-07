import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { fetchRepoReadme } from "../../services/repoService";
import Markdown from "react-markdown/with-html";
const RepoDetail = () => {
  const [readme, setReadme] = React.useState("");
  const location = useLocation();
  const params = useParams();

  console.log("Location", location, "Params", params);

  React.useEffect(() => {
    async function fetchRepoDetail() {
      const { data } = await fetchRepoReadme(location.pathname);
      setReadme(data.content);
      console.log(data);
    }
    fetchRepoDetail();
  }, []);
  return (
    <div className="p-2 pt-3 pl-md-5 pr-md-5">
      <Markdown source={atob(readme)} escapeHtml={false} />
    </div>
  );
};

export default RepoDetail;
