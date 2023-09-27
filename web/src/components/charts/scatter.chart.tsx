import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import useWindowSize from "../../hooks/windowSize.hook";

interface DataPoint {
  [key: string]: any
}

interface ScatterGraphProps{ 
  data: DataPoint[]
  x: string
  y: string
}

export const ScatterGraph: React.FC<ScatterGraphProps> = ({x, y, data}) => {
  const { width } = useWindowSize();

  return (
    <ScatterChart
      width={width < 700 ? width - 32 : 600}
      height={width < 700 ? 200 : 300}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
      
      
    >
      <CartesianGrid />
      <XAxis type="number" dataKey={x} unit="$" />
      <YAxis dataKey={y} type="category" allowDuplicatedCategory={false} fontSize={12}/>
      <Tooltip cursor={{ strokeDasharray: "10 10" }} />
      <Scatter name="A school" data={data} fill="#6e0b75" />
    </ScatterChart>
  );
};
