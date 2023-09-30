import { Theme, useThemeState } from "@/store/theme.store";
import React, { ReactNode } from "react";

interface Background {
  children: ReactNode;
}

export const Background: React.FC<Background> = ({ children }) => {
  const { theme } = useThemeState();

  return (
    <main
      className={`h-full w-full ${getBackgroundColor(theme)} min-h-screen px-4`}
    >
      {children}
    </main>
  );
};

const getBackgroundColor = (theme: Theme) => {
  if (theme === Theme.Fantasy) {
    return "bg-gray-200";
  }
  if (theme === Theme.Cupcake) {
    return "bg-gray-300";
  }

  return "bg-gray-800";
};
