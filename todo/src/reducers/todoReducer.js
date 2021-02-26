import {
  ADD_TODO,
  TOGGLE_COMPLETED,
  CLEAR_COMPLETED,
} from "../actions/todoActions";

export const initialValues = [
  { item: "Learn about reducers", completed: false, id: new Date() },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { item: action.payload, completed: false, id: new Date() },
      ];
    case TOGGLE_COMPLETED:
      //   console.log("completed Toggled");
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    case CLEAR_COMPLETED:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};
export default todoReducer;
