import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faExclamationCircle,
  faCodeBranch,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";

const RepoInfoList = ({ repo }) => {
  return (
    <ul className="list-group list-group-flush ">
      <p className="font-weight-bold text-info mt-5">Repositary Details</p>
      <li className="list-group-item p-0 pb-2">
        <p className="font-weight-bold "> {repo.full_name}</p>
        <p> {repo.description}</p>
      </li>
      <li className="list-group-item p-0 pb-2 m-0">
        <p className="font-weight-bold m-0">Owner</p>
        <Link
          to={{ pathname: repo.html_url }}
          target="_blank"
          className="d-flex "
        >
          <img src={repo.owner?.avatar_url} alt="" height="30px" />
          <p className="ml-3 cursor-pointer">{repo.owner?.login}</p>
        </Link>
      </li>
      <li className="list-group-item  p-0 pb-2">
        <p className="font-weight-bold m-0">Repo Name</p>
        <Link
          to={{ pathname: repo.html_url }}
          target="_blank"
          className="d-flex cursor-pointer"
        >
          <FontAwesomeIcon icon={faSitemap} className="text-dark mr-2" />
          <p className="ml-3"> {repo.name}</p>
        </Link>
      </li>
      <li className="list-group-item p-0 pb-2">
        <p className="font-weight-bold m-0">Open Issues</p>
        <FontAwesomeIcon
          icon={faExclamationCircle}
          className="text-info mr-4"
        />
        {repo.open_issues_count}
      </li>
      <li className="list-group-item p-0 pb-2">
        <p className="font-weight-bold m-0">Default Branch</p>
        <FontAwesomeIcon icon={faCodeBranch} className="text-primary mr-4" />
        {repo.default_branch}
      </li>
    </ul>
  );
};

RepoInfoList.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoInfoList;
