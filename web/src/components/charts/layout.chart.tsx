import { ReactNode } from "react";

interface ChartLayoutProps {
  children: ReactNode;
  title: string;
}

export const ChartLayout: React.FC<ChartLayoutProps> = ({
  children,
  title,
}) => {
  return (
    <div className="flex w-full flex-col items-center pt-4 lg:pt-0">
      <h2 className="pb-2 font-bold">{title}</h2>
      {children}
    </div>
  );
};
