import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { getQueryParams } from "../../utils/searchQuery";
import { getRepositories } from "../../services/repoSearchService";

const SearchResult = () => {
  const location = useLocation();
  const [repo, setRepo] = React.useState({});

  React.useEffect(() => {
    async function fetchRepo() {
      const params = getQueryParams(location);
      const { data } = await getRepositories(params);
      console.log(data.items);
      setRepo(data);
    }
    fetchRepo();
  }, [location]);

  return (
    <div className="container">
      {repo?.items?.map((item) => (
        <div className="row justify-content-md-center m-2" key={item.id}>
          <div className="col">
            <div className="card border-left-0 border-right-0 border-top-0">
              <div className="card-body">
                <Link to={{ pathname: item.html_url }} target="_blank">
                  <h5 className="card-title">{item.full_name}</h5>
                </Link>
                <h6 className="card-subtitle mb-2 text-muted">
                  {item.default_branch}
                </h6>
                <Link to={{ pathname: item.owner.repos_url }} target="_blank">
                  <h6 className="card-subtitle mb-2 text-muted">
                    {item.owner.login}
                  </h6>
                </Link>
                <h6 className="card-subtitle mb-2 text-muted">
                  {item.open_issues_count}
                </h6>
                <p className="card-text">{item.description}</p>
                <Link to="#" className="card-link">
                  {item.stargazers_count}
                </Link>
                <Link to="#" className="card-link">
                  {item.watchers_count}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
