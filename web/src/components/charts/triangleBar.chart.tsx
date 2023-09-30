import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { useGraphSize } from "@/hooks/graphSize.hook";
import { useThemeState, Theme } from "@/store/theme.store";

interface TriangleBarProps {
  fill: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

const colors = ["#6e0b75", "#00C49F", "#FFBB28", "#FF8042"];

interface TriangleChartProps {
  data: {
    totalGrossAmount: number;
    channel: string;
  }[];
}
export const CustomBarChart: React.FC<TriangleChartProps> = ({ data }) => {
  const { graphHeight, graphWidth } = useGraphSize();
  const { theme } = useThemeState();

  return (
    <>
      <div className="sr-only">
        "The bar chart shows the gross revenue by channel type."
      </div>
      <BarChart
        role="img"
        width={graphWidth}
        height={graphHeight}
        data={data}
        aria-label="The bar chart shows the gross revenue by channel type."
      >
        <CartesianGrid strokeDasharray="10 10" />
        <XAxis
          dataKey="channel"
          tick={{ fill: theme === Theme.Night ? "#FFF" : "#666" }}
        />
        <YAxis
          fontSize={12}
          unit="$"
          tick={{ fill: theme === Theme.Night ? "#FFF" : "#666" }}
        />
        <Bar
          dataKey="totalGrossAmount"
          shape={(props) => <TriangleBar {...props} />}
          label={{
            position: "top",
            fill: theme === Theme.Night ? "#FFF" : "#000",
            fontWeight: "bold",
          }}
        >
          {data.map((_, index: number) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </>
  );
};

const TriangleBar: React.FC<TriangleBarProps> = ({
  fill,
  x,
  y,
  width,
  height,
}) => {
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const getPath = (
  x: number,
  y: number,
  width: number,
  height: number
): string => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};
