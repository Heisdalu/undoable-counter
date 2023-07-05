/* eslint-disable react/prop-types */
import { useEffect, useReducer } from "react";
import UserContext from "./ctx";

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
  const checkLocalStorage = localStorage.getItem("counter");
  const initialData = checkLocalStorage
    ? JSON.parse(checkLocalStorage)
    : initial;
  const [ctxState, dispatch] = useReducer(contextReducer, initialData);

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

  localStorage.setItem("counter", JSON.stringify(dataState));

  useEffect(() => {
    if (!checkLocalStorage) {
      localStorage.setItem("counter", JSON.stringify(initial));
    }
  }, [checkLocalStorage]);

  return (
    <UserContext.Provider value={dataState}>{children}</UserContext.Provider>
  );
};
