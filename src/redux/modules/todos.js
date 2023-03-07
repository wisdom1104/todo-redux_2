const Add = "AddTodo";
const Remove = "RemoveTodo";
const Complet = "CompletTodo";

export const AddTodo = (payload) => {
  return {
    type: Add,
    payload,
  };
};

export const RemoveTodo = (payload) => {
  return {
    type: Remove,
    payload,
  };
};

export const CompletTodo = (payload) => {
  return {
    type: Complet,
    payload,
  };
};

const initialState = [
  {
    id: 1, // id는 모두 고유값이어야 합니다.
    title: "리액트",
    content: "할만 했었지.......",
    isDone: false,
  },
  {
    id: 2, // id는 모두 고유값이어야 합니다.
    title: "리덕스",
    content: "울고 말았지......",
    isDone: true,
  },
];

const todo = (state = initialState, action) => {
  switch (action.type) {
    case Add:
      const addTodo = {
        id: Date.now(),
        title: action.payload.title,
        content: action.payload.content,
        isDone: false,
      };
      return [...state, addTodo];
    case Remove:
      const removeTodo = state.filter((item) => {
        return item.id !== action.payload.id;
      });
      return removeTodo;
    case Complet:
      const completTodo = state.map((item) => {
        return item.id === action.payload.id
          ? { ...item, isDone: !item.isDone }
          : item;
      });
      return completTodo;
    default:
      return state;
  }
};
export default todo;
