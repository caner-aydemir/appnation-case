"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface TemperatureContextType {
  isCelsius: boolean;
  toggleUnit: () => void;
}

const TemperatureContext = createContext<TemperatureContextType | undefined>(
  undefined
);

export const TemperatureProvider = ({ children }: { children: ReactNode }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleUnit = () => {
    setIsCelsius((prev) => !prev);
  };

  return (
    <TemperatureContext.Provider value={{ isCelsius, toggleUnit }}>
      {children}
    </TemperatureContext.Provider>
  );
};

export const useTemperature = () => {
  const context = useContext(TemperatureContext);
  if (!context) {
    throw new Error("useTemperature must be used within a TemperatureProvider");
  }
  return context;
};
