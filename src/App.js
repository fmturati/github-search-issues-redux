import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/rootActions";
// import axios from "axios";
import "./App.css";
import SearchScreen from "./components/searchScreen/searchScreen";
import IssuesScreen from "./components/issuesScreen/issuesScreen";

// const accessToken = process.env.REACT_APP_TOKEN;
// const baseURL = process.env.REACT_APP_BASE_URL;
// const config = {
//   headers: { Authorization: "Bearer" + accessToken }
// };

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     filterActive: "issues?state=all",
  //     hasError: null,
  //     issues: [],
  //     isSearch: false,
  //     isLoading: false,
  //     repoSearched: null,
  //     isEditSearch: false
  //   };
  // }

  // getRepo = e => {
  //   e.preventDefault();
  //   const repoSearched = e.target.elements.searchRepo.value;
  //   const filterActive = this.state.filterActive;
  //   const setUserRepo = repoSearched.replace("https://github.com/", "");

  //   // TO ADD PAGINATION AND PER PAGE PARAMS:
  //   // ?page=2 & per_page=100`

  //   this.getAPI(setUserRepo, filterActive);
  //   e.target.elements.searchRepo.value = "";
  // };

  // setFilter = filterElement => {
  //   const repoName = this.state.repoSearched;
  //   this.setState({ filterActive: filterElement, isLoading: true });
  //   const setUserRepo = repoName.replace("https://github.com/", "");
  //   this.getAPI(setUserRepo, filterElement);
  // };

  // handleCloseScreen = () => {
  //   this.setState({
  //     isSearch: !this.state.isSearch,
  //     isEditSearch: false,
  //     repoSearched: null,
  //     filterActive: "issues?state=all"
  //   });
  // };

  // toggleEditSearch = () => {
  //   console.log("edit");
  //   this.setState({ isEditSearch: !this.isEditSearch });
  // };

  // handleEditSearch = e => {
  //   e.preventDefault();
  //   const newSearch = e.target.elements.newSearch.value;
  //   const filterActive = this.state.filterActive;
  //   this.setState({
  //     repoSearched: newSearch,
  //     filterActive: "issues?state=all",
  //     isLoading: true
  //   });
  //   const repoSearched = newSearch.replace("https://github.com/", "");

  //   this.getAPI(repoSearched, filterActive);
  // };

  // getAPI(setUserRepo, filterActive, url) {
  //   const baseURL = process.env.REACT_APP_BASE_URL;
  //   url = `${baseURL}/repos/${setUserRepo}/${filterActive}`;
  //   axios
  //     .get(url, config)
  //     .then(res => {
  //       const repos = res.data;
  //       this.setState({
  //         issues: repos,
  //         isSearch: true,
  //         repoSearched: setUserRepo,
  //         isLoading: false,
  //         filterActive: filterActive
  //       });
  //     })
  //     .catch(err => {
  //       this.setState({ hasError: err });
  //       console.log("Something went wrong...", err);
  //     });
  // }

  render() {
    const {
      isSearch,
      issues,
      hasError,
      isLoading,
      filterActive,
      isEditSearch,
      filters
    } = this.props;

    const transitionScreen = {
      position: "absolute",

      transform: isSearch ? "translateY(-2000px)" : "translateY(0)",
      transition: "all 0.6s cubic-bezier(0.94, 0.01, 0.58, 1)",
      width: "100%",
      height: "100%"
    };
    const transitionsResult = {
      position: "absolute",
      transform: isSearch ? "translateX(0px)" : "translateX(-3000px)",
      transition: "all 0.8s ease-in-out",
      width: "100%",
      height: "100%"
    };

    return (
      <Fragment>
        <div style={transitionScreen}>
          <SearchScreen
            getAPI={this.props.getAPI}
            filterActive={filterActive}
            hasError={hasError}
          />
        </div>

        <div style={transitionsResult}>
          <IssuesScreen
            {...this.props}
            // data={this.props}
            issues={issues}
            isLoading={isLoading}
            isEditSearch={isEditSearch}
            // handleEditSearch={this.handleEditSearch}
            handleCloseScreen={this.props.handleCloseScreen}
            // toggleEditSearch={this.toggleEditSearch}
            getAPI={this.props.getAPI}
            setFilter={this.props.setFilter}
            filterActive={filterActive}
            filters={filters}
          />
          {/* {console.log(this.props)} */}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     getAPI = (dispatch) => dispatch({type: "GET_REPOS", })
//   }
// }

export default connect(
  mapStateToProps,
  actionCreators
)(App);
