import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { useGraphSize } from "@/hooks/graphSize.hook";
import MasterCardLogo from "../logo/mastercard.logo";
import HipercardLogo from "../logo/hipercard.logo";
import EloLogo from "../logo/elo.logo";
import VisaLogo from "../logo/visa.logo";

interface DataPoint {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface ScatterGraphProps {
  data: DataPoint[];
  x: string;
  y: string;
}

interface CustomAxisTickProps {
  payload: {
    coordinate: number;
    index: number;
    isShow: boolean;
    offset: number;
    tickCoord: number;
    value: string
  },
  fontSize: number;
  x: number;
  y: number;
  width: number;
}

export const ScatterGraph: React.FC<ScatterGraphProps> = ({ x, y, data }): JSX.Element => {
  const { graphHeight, graphWidth } = useGraphSize();

  return (
    <>
      <div className="sr-only">
        The scatter chart displays the distribution of purchases made by
        different card brands.
      </div>
      <ScatterChart
        role="img"
        aria-label="The scatter chart displays the distribution of purchases made by different card brands."
        width={graphWidth}
        height={graphHeight}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid strokeDasharray="10 10"/>
        <XAxis type="number" dataKey={x} unit="$"  />
        <YAxis
          dataKey={y}
          type="category"
          tick={(props)=><CustomAxisTick {...props} />}
          allowDuplicatedCategory={false}
          fontSize={12}
        />
        <Tooltip cursor={{ strokeDasharray: "10 10" }} />
        <Scatter name="A school" data={data} fill="#6e0b75" />
      </ScatterChart>
    </>
  );
};


export default ScatterGraph

const CustomAxisTick: React.FC<CustomAxisTickProps> = ({width, x, y, payload}) => {
  const YAxisOffset = 5

  return (
    <g transform={`translate(${x - width},${y - YAxisOffset})`}  >
      {LogoByCardBrand(payload.value)}
      <text  fontSize={10} fill="#666" y={-YAxisOffset}>
        {payload.value}
      </text>
    </g>
  );
};

const LogoByCardBrand = (brand: string) =>{
  if(brand === "Mastercard"){
    return <MasterCardLogo/>
  }
  else if(brand === "Visa"){
    return <VisaLogo/>
  }
  else if(brand === "Elo"){
    return <EloLogo/>
  }
  else{
    return <HipercardLogo/>

  }
}