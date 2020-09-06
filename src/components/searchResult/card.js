import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCircle,
  faCodeBranch,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

const Card = ({ item }) => {
  const lastUpdated = moment(item.updated_at).startOf("hour").fromNow();

  return (
    <div className="card shadow">
      <div className="card-body">
        <Link to={{ pathname: item.html_url }} target="_blank">
          <h5 className="card-title">{item.full_name}</h5>
        </Link>
        <p className="card-subtitle mb-2 text-muted">
          Owned By:- {item.owner.login}
          <FontAwesomeIcon icon={faEye} className=" mr-1 ml-3 text-success" />
          {item.watchers_count.toLocaleString()}
        </p>
        <p className="card-text  text-truncate ">{item.description}</p>
        <div className="d-flex">
          <Link to="#" className="card-link">
            <FontAwesomeIcon icon={faStar} className="text-dark mr-1" />
            {(item.stargazers_count / 1000).toFixed(1)}K
          </Link>
          <p>
            <FontAwesomeIcon
              icon={faCircle}
              className="text-warning ml-2 mr-1"
            />
            {item.language}
          </p>
          <p className="ml-2">Updated {lastUpdated}</p>
          <p className="ml-3">
            <FontAwesomeIcon icon={faCodeBranch} /> {item.forks_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
