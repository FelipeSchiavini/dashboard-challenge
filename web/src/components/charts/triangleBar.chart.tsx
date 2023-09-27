import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import useWindowSize from "../../hooks/windowSize.hook";

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

interface TriangleBarProps {
  fill: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

const TriangleBar: React.FC<TriangleBarProps> = ({
  fill,
  x,
  y,
  width,
  height,
}) => {
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const colors = ["#6e0b75", "#00C49F", "#FFBB28", "#FF8042"];

interface TriangleChartProps {
  data: {
    totalGrossAmount: number;
    channel: string;
  }[];
}
export const Chart: React.FC<TriangleChartProps> = ({ data }) => {
  const { width } = useWindowSize();


  return (
      <BarChart width={width < 700 ? width - 32 : 600 } height={width < 700 ? 200 : 300} data={data}>
        <CartesianGrid strokeDasharray="10 10"   />
        <XAxis dataKey="channel" />
        <YAxis fontSize={12} unit="$"/>
        <Bar
          dataKey="totalGrossAmount"
          shape={(props) => <TriangleBar {...props} />}
          label={{ position: "top", fill: '#000', fontWeight: "bold" }}
        >
          {data.map((_, index: number) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
  );
};
