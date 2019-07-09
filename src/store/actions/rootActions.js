import axios from "axios";

export const GET_REPOS = "GET_REPOS";
export const SHOW_REPOS = "SHOW_REPOS";
export const CLOSE_SCREEN = "CLOSE_SCREEN";
export const SET_FILTER = "SET_FILTER";
export const HAS_ERROR = "HAS_ERROR";

const accessToken = process.env.REACT_APP_TOKEN;
const config = { headers: { Authorization: "Bearer " + accessToken } };

export const getAPI = (repoName, filterActive) => {
  return dispatch => {
    axios
      .get(`https://api.github.com/repos/${repoName}/${filterActive}`, config)
      .then(dispatch({ type: SHOW_REPOS, isLoading: true }))
      .then(res =>
        dispatch({
          type: GET_REPOS,
          repoSearched: repoName,
          issues: res.data,
          isLoading: false,
          isSearch: true,
          filterActive: filterActive
        })
      )

      .catch(err => dispatch({ type: HAS_ERROR, hasError: err }));
  };
};

export const handleCloseScreen = () => {
  return dispatch => {
    dispatch({
      type: CLOSE_SCREEN,
      isSearch: false,
      filterActive: "issues?state=all",
      issues: []
    });
  };
};
