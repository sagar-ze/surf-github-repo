import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faExclamationCircle,
  faCodeBranch,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

const RepoInfo = ({ repo }) => {
  return (
    <ul className="list-group list-group-flush ml-3 ml-md-5 overflow-hidden">
      <p className="font-weight-bold text-info mt-5">Repositary Details</p>
      <li className="list-group-item p-0 pb-2">
        <p className="font-weight-bold "> {repo.full_name}</p>
        <p> {repo.description}</p>
      </li>
      <li className="list-group-item p-0 pb-2 m-0">
        <p className="font-weight-bold m-0">Owner</p>
        <Link
          to={{ pathname: repo.owner?.html_url }}
          target="_blank"
          className="d-flex "
        >
          <img src={repo.owner?.avatar_url} alt="" height="30px" />
          <p className="ml-3 cursor-pointer">{repo.owner?.login}</p>
        </Link>
      </li>
      <li className="list-group-item  p-0 pb-2 ">
        <p className="font-weight-bold m-0">Repo Name</p>
        <Link
          to={{ pathname: repo.html_url }}
          target="_blank"
          className="d-flex cursor-pointer"
        >
          <FontAwesomeIcon icon={faDatabase} className="text-dark mr-2" />
          <p className="ml-3"> {repo.name}</p>
        </Link>
      </li>
      <li className="list-group-item p-0 pb-2 m-0">
        <p className="font-weight-bold m-0">Open Issues</p>
        <FontAwesomeIcon icon={faExclamationCircle} className="mr-4" />
        {repo.open_issues_count}
      </li>
      <li className="list-group-item p-0 pb-2">
        <p className="font-weight-bold m-0">Default Branch</p>
        <FontAwesomeIcon icon={faCodeBranch} className="mr-4" />
        {repo.default_branch}
      </li>
    </ul>
  );
};

RepoInfo.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoInfo;
