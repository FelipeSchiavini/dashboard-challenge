import { Theme, useThemeState } from "@/store/theme.store";

export const ThemeSwitcher = () => {
  const { setTheme } = useThemeState();

  return (
    <div className="join w-full justify-center">
      <button
        className="btn join-item w-24"
        onClick={() => setTheme(Theme.Cupcake)}
      >
        {Theme.Cupcake}
      </button>
      <button
        className="btn join-item w-24"
        onClick={() => setTheme(Theme.Fantasy)}
      >
        {Theme.Fantasy}
      </button>
      <button
        className="btn join-item w-24"
        onClick={() => setTheme(Theme.Night)}
      >
        {Theme.Night}
      </button>
    </div>
  );
};
