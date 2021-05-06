import {
  loadTodosFailure,
  loadTodosSuccess,
  LOAD_TODOS,
  PUT_TODO,
  SET_TODOS,
  setTodos,
  LOAD_TODOS_FAILURE,
  LOAD_TODOS_SUCCESS,
} from "../../actions/todos";
import * as uiActions from "../../actions/ui";

const loadTodosFlow = ({ api, log }) => ({ dispatch }) => (next) => async (
  action
) => {
  next(action);
  switch (action.type) {
    case LOAD_TODOS:
      try {
        dispatch(uiActions.setLoading(true));
        const todos = await api.todos.getAll();
        dispatch(loadTodosSuccess(todos));
        dispatch(uiActions.setLoading(false));
      } catch (error) {
        dispatch(loadTodosFailure(error));
      }
      break;

    case LOAD_TODOS_SUCCESS:
      log("successfully loaded todos");
      break;

    case LOAD_TODOS_FAILURE:
      log("error loaded todos");
      break;

    default:
      break;
  }
};

const putTodoFlow = ({ log }) => ({ dispatch, getState }) => (next) => (
  action
) => {
  switch (action.type) {
    case PUT_TODO:
      const oldTodosClone = getState().todos.allTodos.map((todo) => ({
        ...todo,
      }));

      const newTodo = action.payload;

      const index = oldTodosClone.findIndex((todo) => todo.id === newTodo.id);

      oldTodosClone[index] = newTodo;

      dispatch(setTodos(oldTodosClone));
      break;
    case SET_TODOS:
      log("Todos list updated");
      break;
    default:
      break;
  }

  next(action);
};

const todosFlow = [loadTodosFlow, putTodoFlow];

export default todosFlow;
