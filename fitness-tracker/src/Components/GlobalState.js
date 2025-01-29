import React, { createContext, useReducer, useEffect } from "react";

// Load initial state from localStorage
const initialState = {
  selectedPage: localStorage.getItem("selectedPage") || "/",
  goals: JSON.parse(localStorage.getItem("goals")) || [],
  reminders: JSON.parse(localStorage.getItem("reminders")) || [],
};

// Reducer function
const reducer = (state, action) => {
  let updatedGoals, updatedReminders;

  switch (action.type) {
    case "SET_SELECTED_PAGE":
      localStorage.setItem("selectedPage", action.payload);
      return { ...state, selectedPage: action.payload };

    case "SET_GOALS":
      localStorage.setItem("goals", JSON.stringify(action.payload));
      return { ...state, goals: action.payload };

    case "SET_REMINDERS":
      localStorage.setItem("reminders", JSON.stringify(action.payload));
      return { ...state, reminders: action.payload };

    default:
      return state;
  }
};

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
