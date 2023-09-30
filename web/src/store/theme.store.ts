import { create } from "zustand";

export enum Theme {
  Cupcake = "cupcake",
  Fantasy = "fantasy",
  Night = "night",
}

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeState = create<ThemeState>()((set) => ({
  theme: Theme.Fantasy,
  setTheme: (theme: Theme) => {
    const htmlElement = document.querySelector("html");
    htmlElement?.setAttribute("data-theme", theme);
    set({ theme });
  },
}));
