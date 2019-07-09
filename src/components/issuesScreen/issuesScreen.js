import React from "react";
import "./issuesScreen.css";
import Header from "./header/header";
import Issue from "./issue/issue";
import Loader from "../loader/loader";

const IssuesScreen = props => {
  const {
    filterActive,
    isLoading,
    // isEditSearch,
    handleCloseScreen,
    repoSearched,
    issues,
    filters,
    getAPI
  } = props;

  const showAllIssues = issues
    ? issues.map((issue, index) => {
        return (
          <Issue
            filterActive={filterActive}
            issue={issue}
            index={index}
            key={index}
          />
        );
      })
    : null;

  return (
    <div>
      <Header
        {...props}
        getAPI={getAPI}
        filterActive={filterActive}
        filters={filters}
        handleCloseScreen={handleCloseScreen}
        isLoading={isLoading}
        repoSearched={repoSearched}
        // repoName={props.repoSearched}
        // toggleEditSearch={toggleEditSearch}
        // isEditSearch={isEditSearch}
        // handleEditSearch={handleEditSearch}
        // setFilter={setFilter}
      />

      <div className="container">
        {isLoading ? (
          <Loader />
        ) : issues.length !== 0 ? (
          // if the repo has issues...
          <div className="issues-grid">{showAllIssues}</div>
        ) : (
          // else ...
          <div className="no-issues-message">
            <h3>No Issues to list! Please, try to search for another Repo!</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default IssuesScreen;
