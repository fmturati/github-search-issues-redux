import React from "react";
import searchIcon from "../../static/img/search.svg";
import "./searchScreen.css";

const SearchScreen = props => {
  const { getAPI, hasError, filterActive } = props;
  return (
    <div className="search">
      <h1 className="search-title">GitHub Issue Viewer</h1>
      <div>
        <form
          className="search-form"
          onSubmit={e => {
            e.preventDefault();
            const repoName = e.target.elements.searchRepo.value;
            const setUserRepo = repoName.replace("https://github.com/", "");
            getAPI(setUserRepo, filterActive);
            e.target.elements.searchRepo.value = "";
          }}
        >
          <img src={searchIcon} alt="Search Icon" className="search-icon" />
          <input
            type="text"
            placeholder="Paste a link to a GitHub repo!"
            className="search-field"
            name="searchRepo"
          />
        </form>
      </div>
      {hasError && (
        <div className="search-error">
          <p className="search-error--big">
            Oh no! Unfortunately, we couldn't find this Repo!
          </p>
          <p className="search-error--small">
            ( e.g. 'https://github.com/username/reponame' )
          </p>
        </div>
      )}
    </div>
  );
};
export default SearchScreen;
