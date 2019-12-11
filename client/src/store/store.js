import React, { createContext, useReducer } from "react";
import * as actionType from "./actionTypes";
const initialState = { isAuth: false };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case actionType.LOGIN_FAIL:
        return {
          ...state,
          isAuth: false
        };
      case actionType.LOGIN_OKAY:
        return {
          ...state,
          isAuth: true
        };
      default:
        return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { StateProvider, store };
