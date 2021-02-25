import { ADD_TODO } from "../actions/todoActions";

export const initialValues = {
  item: "Learn about reducers",
  completed: false,
  id: 1,
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        item: action.payload,
        completed: false,
        id: new Date(),
      };
  }
};
export default todoReducer;
