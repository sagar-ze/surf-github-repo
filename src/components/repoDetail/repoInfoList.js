import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faExclamationCircle,
  faCodeBranch,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";

const RepoInfoList = ({ repoDetail }) => {
  return (
    <ul className="list-group list-group-flush ">
      <p className="font-weight-bold text-info mt-5">Repositary Details</p>
      <li className="list-group-item p-0 pb-2">
        <p className="font-weight-bold "> {repoDetail.full_name}</p>
        <p> {repoDetail.description}</p>
      </li>
      <li className="list-group-item p-0 pb-2 m-0">
        <p className="font-weight-bold m-0">Owner</p>
        <Link
          to={{ pathname: repoDetail.html_url }}
          target="_blank"
          className="d-flex "
        >
          <img src={repoDetail.owner?.avatar_url} alt="" height="30px" />
          <p className="ml-3 cursor-pointer">{repoDetail.owner?.login}</p>
        </Link>
      </li>
      <li className="list-group-item  p-0 pb-2">
        <p className="font-weight-bold m-0">Repo Name</p>
        <Link
          to={{ pathname: repoDetail.html_url }}
          target="_blank"
          className="d-flex cursor-pointer"
        >
          <FontAwesomeIcon icon={faSitemap} className="text-dark mr-2" />
          <p className="ml-3"> {repoDetail.name}</p>
        </Link>
      </li>
      <li className="list-group-item p-0 pb-2">
        <p className="font-weight-bold m-0">Open Issues</p>
        <FontAwesomeIcon
          icon={faExclamationCircle}
          className="text-info mr-4"
        />
        {repoDetail.open_issues_count}
      </li>
      <li className="list-group-item p-0 pb-2">
        <p className="font-weight-bold m-0">Default Branch</p>
        <FontAwesomeIcon icon={faCodeBranch} className="text-primary mr-4" />
        {repoDetail.default_branch}
      </li>
    </ul>
  );
};

export default RepoInfoList;
