import React, { createContext, useContext, useState } from "react";


// Create global variables to track preferences


export const PreferencesContext = createContext();

// Provider component
export const PreferencesContextProvider = ({ children }) => {
  const [preferences, setPreferences] = useState({
    timezone: '',
    times: [],
    types: [],
    ranking: [],
  });
  const [submitted, setSubmitted] = useState(false)

  const setTimeZone = (timezone) => {
    setPreferences((prev) => ({
      ...prev,
      timezone,
    }));
  };

  const toggleTime = (time) => {
    setPreferences((prev) => ({
      ...prev,
      times: prev.times.includes(time)
        ? prev.times.filter((t) => t !== time)
        : [...prev.times, time],
    }));
  };

  const toggleType = (type) => {
    setPreferences((prev) => ({
      ...prev,
      types: prev.types.includes(type)
        ? prev.types.filter((t) => t !== type)
        : [...prev.types, type],
    }));
  };

  const setRanking = (rankingArray) => {
    setPreferences((prev) => ({
      ...prev,
      ranking: rankingArray,
    }));
  };

  
  //pass the global variables to all children
const markSubmitted = () => setSubmitted(true);
const clearSubmitted = () => setSubmitted(false);
  return (
    <PreferencesContext.Provider
      value={{
        preferences,
        setPreferences,
        setTimeZone,
        toggleTime,
        toggleType,
        setRanking,
        markSubmitted, 
        clearSubmitted,
        submitted
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};
