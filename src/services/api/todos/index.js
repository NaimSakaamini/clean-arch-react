import API from "../instance";

const todosServices = {
  getAll: async () => {
    const response = await API.get("/todos");
    return response.data;
  },
};

export default todosServices;
