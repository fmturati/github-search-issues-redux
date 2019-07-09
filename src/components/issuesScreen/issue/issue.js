import React from "react";
import issueClosedIcon from "../../../static/img/issue-closed.svg";
import pullRequestIcon from "../../../static/img/pull-request.svg";
import Label from "./labels/label";
import "./issue.css";

const Issue = props => {
  const { body, html_url, labels, pull_request, state, title } = props.issue;
  const issueTitle = title.length > 40 ? title.substring(0, 40) + "..." : title;
  const bodyMessage =
    body === "" ? (
      <span className="issue-body--noDescription">
        No description provided.
      </span>
    ) : body.length > 40 ? (
      body.substring(0, 40) + "..."
    ) : (
      body
    );

  const showIssueLabels = labels.map(label => {
    const labelKey = Math.floor(Math.random() * label.id + 1);
    return <Label name={label.name} key={labelKey} />;
  });

  return (
    <div className="issue" key={props.index}>
      <a
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="issue-link"
      >
        <div className="issue-header">
          <p className="issue-title">{issueTitle}</p>
          <div className="issue-status-section">
            {state === "closed" && (
              <img
                src={issueClosedIcon}
                alt="Issue Closed Icon"
                className="issue-status-icons"
              />
            )}
            {pull_request || props.filterActive === "pulls?pull_request" ? (
              <img
                src={pullRequestIcon}
                alt="Pull Request Icon"
                className="issue-status-icons"
              />
            ) : null}
          </div>
        </div>
      </a>
      <div className="issue-content">
        <p className="issue-body">{bodyMessage}</p>
      </div>
      <div className="issue-labels">{showIssueLabels}</div>
    </div>
  );
};

export default Issue;
