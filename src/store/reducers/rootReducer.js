import {
  GET_REPOS,
  SHOW_REPOS,
  CLOSE_SCREEN,
  HAS_ERROR
} from "../actions/rootActions";

const initialState = {
  filterActive: "issues?state=all",
  hasError: null,
  issues: [],
  isSearch: false,
  isLoading: false,
  repoSearched: null,
  isEditSearch: false,
  filters: [
    {
      name: "All Issues",
      action: "issues?state=all"
    },
    {
      name: "Open Issues",
      action: "issues?state=open"
    },
    {
      name: "Closed Issues",
      action: "issues?state=closed"
    },
    {
      name: "Pull Requests",
      action: "pulls?pull_request"
    }
  ]
};

const issuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOS: {
      return {
        ...state,
        issues: action.issues,
        repoSearched: action.repoSearched,
        isLoading: action.isLoading,
        isSearch: action.isSearch,
        filterActive: action.filterActive
      };
    }
    case SHOW_REPOS: {
      return {
        ...state,
        isLoading: action.isLoading
      };
    }
    case HAS_ERROR: {
      return {
        ...state,
        hasError: action.hasError
      };
    }
    case CLOSE_SCREEN: {
      return {
        ...state,
        isSearch: action.isSearch,
        filterActive: action.filterActive,
        issues: action.issues
      };
    }
    default: {
      return state;
    }
  }
};

export default issuesReducer;
