import ui from "./ui/ui";
import todos from "./todos/todos";

const middlewares = [...ui, ...todos];
export default middlewares;
