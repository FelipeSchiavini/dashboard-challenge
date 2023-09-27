import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

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

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

interface TriangleChartProps {
  data: {
    totalGrossAmount: number;
    channel: string;
  }[];
}
export const Chart: React.FC<TriangleChartProps> = ({ data }) => {
  return (
    <div className="w-full justify-center flex flex-col items-center"> 
      <h2 className="text-center pb-2">Faturamento bruto por tipo de canal</h2>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="channel" />
        <YAxis />
        <Bar
          dataKey="totalGrossAmount"
          shape={(props) => <TriangleBar {...props} />}
          label={{ position: "centerTop", fill: '#fff' }}
        >
          {data.map((_, index: number) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};
