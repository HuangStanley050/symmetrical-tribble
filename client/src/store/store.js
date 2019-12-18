import React, { createContext, useReducer } from "react";
import * as actionType from "./actionTypes";
const initialState = { isAuth: true, trivias: [], numberRights: 0 };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case actionType.LOGOUT:
        return {
          ...state,
          isAuth: false,
          trivias: []
        };
      case actionType.SET_TRIVIAS:
        //console.log(action.payload);
        return {
          ...state,
          trivias: [...action.payload]
        };
      case actionType.LOGIN_FAIL:
        console.log(action);
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
