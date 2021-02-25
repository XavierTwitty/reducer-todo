export const ADD_TODO = "ADD_TODO";

export default {
  addTodo: () => {
    console.log("adding a todo to list");
    return { type: ADD_TODO };
  },
};
