import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCircle,
  faCodeBranch,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { repoDetail } from "../../config/pathname";

const Card = ({ repo }) => {
  const lastUpdated = moment(repo.updated_at).startOf("hour").fromNow();
  const totalStars =
    repo.stargazers_count > 100
      ? `${(repo.stargazers_count / 1000).toFixed(1)}K`
      : repo.stargazers_count;

  return (
    <div className="card shadow">
      <div className="card-body">
        <Link to={repoDetail.param(repo.full_name, "README.md")}>
          <h5 className="card-title text-truncate cursor-pointer">
            {repo.full_name}
          </h5>
        </Link>
        <p className="card-subtitle mb-2 text-muted">
          Owned By:- {repo.owner.login}
          <FontAwesomeIcon icon={faEye} className=" mr-1 ml-3 text-success" />
          {repo.watchers_count.toLocaleString()}
        </p>
        <p className="card-text text-truncate ">{repo.description}</p>
        <div className="d-flex card-bottom-row">
          <FontAwesomeIcon icon={faStar} className="text-dark mr-1" />
          <p className="text-info"> {totalStars}</p>
          <p className="d-none d-sm-block ">
            <FontAwesomeIcon
              icon={faCircle}
              className="text-warning ml-2 mr-1"
            />
            {repo.language}
          </p>
          <p className="ml-2 text-info">Updated {lastUpdated}</p>
          <p className="ml-3">
            <FontAwesomeIcon icon={faCodeBranch} /> {repo.forks_count}
          </p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default Card;
