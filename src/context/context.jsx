/* eslint-disable react/prop-types */
import { useReducer } from "react";
import userContext from "./ctx";

const initial = {
  mainArr: [],
  redoArr: [],
  value: 0,
  updateArr: function () {},
  update: function () {},
};

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
  return state;
};

export const ContextProvider = ({ children }) => {
  const [ctxState, dispatch] = useReducer(contextReducer, initial);

  const updateArrHandler = (obj) => {
    dispatch({ type: obj.type, item: obj.item });
  };
  const updateHandler = (value) => {
    dispatch({ type: "UPDATE", value: value });
  };

  const dataState = {
    ...ctxState,
    updateArr: updateArrHandler,
    update: updateHandler,
  };

  return (
    <userContext.Provider value={dataState}>{children}</userContext.Provider>
  );
};

