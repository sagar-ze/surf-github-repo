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
    <ul class="list-group list-group-flush ">
      <li class="list-group-item p-0 pb-2">
        <Link
          to={{ pathname: repoDetail.html_url }}
          target="_blank"
          className="d-flex "
        >
          <img src={repoDetail.owner?.avatar_url} height="30px" />
          <p className="ml-3 cursor-pointer">{repoDetail.owner?.login}</p>
        </Link>
      </li>
      <li class="list-group-item  p-0 pb-2">
        <Link
          to={{ pathname: repoDetail.html_url }}
          target="_blank"
          className="d-flex cursor-pointer"
        >
          <FontAwesomeIcon icon={faSitemap} className="text-dark mr-2" />
          <p className="ml-3"> {repoDetail.name}</p>
        </Link>
      </li>
      <li class="list-group-item p-0 pb-2">
        <FontAwesomeIcon
          icon={faExclamationCircle}
          className="text-info mr-4"
        />
        {repoDetail.open_issues_count}
      </li>
      <li class="list-group-item p-0 pb-2">
        <FontAwesomeIcon icon={faCodeBranch} className="text-primary mr-4" />
        {repoDetail.default_branch}
      </li>
    </ul>
  );
};

export default RepoInfoList;
