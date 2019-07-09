import React, { Fragment } from "react";
import closeIcon from "../../../static/img/close.svg";
import "./header.css";
import Filters from "./filters/filters";

const Header = props => {
  const {
    // data,
    handleCloseScreen,
    repoSearched,
    setFilter,
    handleEditSearch,
    isEditSearch,
    toggleEditSearch,
    filters
  } = props;
  return (
    <Fragment>
      <div className="header">
        <h1 className="header-title">GitHub Issue Viewer</h1>

        <div onClick={toggleEditSearch} className="header-repo-session">
          {!isEditSearch ? (
            <div>
              <p className="header-repo-title">{repoSearched}</p>
            </div>
          ) : (
            <div>
              <form className="header-repo-form" onSubmit={handleEditSearch}>
                <input
                  type="text"
                  className="header-repo-input"
                  name="newSearch"
                  placeholder={repoSearched}
                />
              </form>
            </div>
          )}
        </div>
      </div>
      <div className="header-navbar">
        <Filters {...props} filters={filters} />
        <a
          onClick={handleCloseScreen}
          className="header-close-icon zoom-element"
        >
          <img src={closeIcon} alt="Close Screen Icon" />
        </a>
      </div>
    </Fragment>
  );
};

export default Header;
