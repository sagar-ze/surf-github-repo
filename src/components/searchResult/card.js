import React from "react";
import { Link, useHistory } from "react-router-dom";
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

const Card = ({ item }) => {
  const history = useHistory();
  const lastUpdated = moment(item.updated_at).startOf("hour").fromNow();
  const totalStars =
    item.stargazers_count > 100
      ? `${(item.stargazers_count / 1000).toFixed(1)}K`
      : item.stargazers_count;

  return (
    <div className="card shadow">
      <div className="card-body">
        <Link to={repoDetail.param(item.full_name, "README.md")}>
          <h5 className="card-title text-truncate">{item.full_name}</h5>
        </Link>
        <p className="card-subtitle mb-2 text-muted">
          Owned By:- {item.owner.login}
          <FontAwesomeIcon icon={faEye} className=" mr-1 ml-3 text-success" />
          {item.watchers_count.toLocaleString()}
        </p>
        <p className="card-text text-truncate ">{item.description}</p>
        <div className="d-flex card-bottom-row">
          <Link to="#" className="card-link">
            <FontAwesomeIcon icon={faStar} className="text-dark mr-1" />
            {totalStars}
          </Link>
          <p className="d-none d-sm-block ">
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

Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Card;
