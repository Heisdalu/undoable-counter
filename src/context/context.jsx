/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

const initial = {
  mainArr: [],
  redoArr: [],
  value: 0,
  updateArr: function () {},
  removeItem: function () {},
  update: function () {},
};

const userContext = createContext({});

const contextReducer = (state, action) => {
  if (action.type === "UPDATE") {
    return {
      ...state,
      value: action.value,
    };
  }

  if (action.type === "UPDATE-ITEM-MAIN") {
    return {
      ...state,
      mainArr: Array.isArray(action.item)
        ? [...action.item]
        : [...state.mainArr, action.item],
    };
  }
  if (action.type === "UPDATE-ITEM-REDO") {
    return {
      ...state,
      redoArr: Array.isArray(action.item)
        ? [...action.item]
        : [...state.redoArr, action.item],
    };
  }
  if (action.type === "REMOVEITEM-UNDO") {
    return {
      ...state,
      undmainArroARr: [...state.undoARr].pop(),
    };
  }
  if (action.type === "REMOVEITEM-REDO") {
    return {
      ...state,
      redoArr: [...state.redoArr].pop(),
    };
  }
  return state;
};

export const ContextProvider = ({ children }) => {
  const [ctxState, dispatch] = useReducer(contextReducer, initial);

  const updateArrHandler = (obj) => {
    dispatch({ type: obj.type, item: obj.item });
  };
  const removeHandler = (type) => {
    dispatch({ type: type });
  };
  const updateHandler = (value) => {
    dispatch({ type: "UPDATE", value: value });
  };

  const dataState = {
    ...ctxState,
    updateArr: updateArrHandler,
    removeItem: removeHandler,
    update: updateHandler,
  };

  return (
    <userContext.Provider value={dataState}>{children}</userContext.Provider>
  );
};

export default userContext;
