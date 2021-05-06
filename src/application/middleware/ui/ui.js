import { PAGE_LOADED, SET_LOADING_OFF, SET_LOADING_ON } from "../../actions/ui";
import * as todosActions from "../../actions/todos";

//destructure the log service from the services injected
const pageLoadedFlow = ({ log }) => ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === PAGE_LOADED) {
    log("page loaded");
    dispatch(todosActions.loadTodos);
  }
};

const setLoadingFlow = ({ log }) => ({ dispatch }) => (next) => (action) => {
  next(action);

  switch (action.type) {
    case SET_LOADING_ON:
      log("loading data");
      break;

    case SET_LOADING_OFF:
      log("finished loading data");
      break;

    default:
      break;
  }
};
const uiFlow = [pageLoadedFlow, setLoadingFlow];

export default uiFlow;
