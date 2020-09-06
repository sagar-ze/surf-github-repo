import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    // <div className="row " key={item.id}>
      // <div className="card-columns">
        <div className="card ">
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
      // </div>
    // </div>
  );
};

export default Card;