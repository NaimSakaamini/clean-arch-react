import "./styles/App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../application/selectors/todos";
import { pageLoaded } from "../application/actions/ui";
import { putTodo } from "../application/actions/todos";
import { getLoading } from "../application/selectors/ui";

const App = () => {
  const isLoading = useSelector(getLoading);
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pageLoaded);
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        "loading ..."
      ) : (
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() =>
                dispatch(putTodo({ ...todo, completed: !todo.completed }))
              }
            >
              {todo.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default App;
