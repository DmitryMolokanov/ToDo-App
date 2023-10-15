import { createStore } from "redux";

const storageTasks = JSON.parse(localStorage.getItem("ToDo")) || [];

const tasksStore = {
  tasks: storageTasks,
  isModal: false,
  isChange: false,
  taskData: false,
};

const reducer = (state = tasksStore, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };

    case "DEL_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => {
          return task.id !== action.payload;
        }),
      };
    case "CHANGE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          } else return task;
        }),
      };
    case "MODAL":
      return { ...state, isModal: action.payload };
    case "IS_CHANGE":
      return { ...state, isChange: action.payload };
    case "GET_DATA":
      return { ...state, taskData: action.payload };

    default:
      return state;
  }
};

export const store = createStore(reducer);
