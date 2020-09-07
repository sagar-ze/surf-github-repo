import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faCodeBranch,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";

const RepoInfoList = ({ repoDetail }) => {
  return (
    <ul class="list-group list-group-flush cursor-pointer">
      <li class="list-group-item d-flex p-0 pb-2">
        <img src={repoDetail.owner?.avatar_url} height="30px" />
        <h2 className="badge badge-warning ">{repoDetail.owner?.login}</h2>
      </li>
      <li class="list-group-item d-flex p-0 pb-2">
        <FontAwesomeIcon icon={faSitemap} className="text-dark mr-2" />
        <p className=" badge badge-warning"> {repoDetail.name}</p>
      </li>
      <li class="list-group-item p-0 pb-2">
        <FontAwesomeIcon
          icon={faExclamationCircle}
          className="text-info mr-2"
        />
        {repoDetail.open_issues_count}
      </li>
      <li class="list-group-item p-0 pb-2">
        <FontAwesomeIcon icon={faCodeBranch} className="text-primary mr-2" />
        {repoDetail.default_branch}
      </li>
    </ul>
  );
};

export default RepoInfoList;
