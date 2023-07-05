/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

const initial = {
  undoARr: [],
  redoArr: [],
  addItem: function () {},
  removeItem: function () {},
};

const userContext = createContext({});

const contextReducer = (state, action) => {
  if (action.type === "ADDITEM-UNDO") {
    return {
      ...state,
      undoARr: [...state, action.item],
    };
  }
  if (action.type === "ADDITEM-REDO") {
    return {
      ...state,
      redoARr: [...state, action.item],
    };
  }
  if (action.type === "REMOVEITEM-UNDO") {
    return {
      ...state,
      undoARr: [...state].pop(),
    };
  }
  if (action.type === "REMOVEITEM-REDO") {
    return {
      ...state,
      redoARr: [...state].pop(),
    };
  }
  return state;
};

export const ContextProvider = ({ children }) => {
  const [ctxState, dispatch] = useReducer(contextReducer, initial);

  const addHandler = (obj) => {
    dispatch({ type: obj.type, item: obj.item });
  };
  const removeHandler = (type) => {
    dispatch({ type: type });
  };

  const dataState = {
    ...ctxState,
    addItem: addHandler,
    removeItem: removeHandler,
  };

  return (
    <userContext.Provider value={dataState}>{children}</userContext.Provider>
  );
};

export default userContext;
