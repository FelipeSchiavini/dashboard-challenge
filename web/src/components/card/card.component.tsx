import { formattedNumber } from '../../utils/strings';
interface CardProps {
  description?: string;
  total: number;
}
export const Card: React.FC<CardProps> = ({description, total}) => {
  return (
    <div className="stats shadow md:w-52 w-32 flex mx-auto h-max-20">
      <div className="stat">
        <div className="stat-title md:text-lg  text-sm">{description}</div>
        <div className="md:stat-value font-bold md:text-4xl text-2lx">{formattedNumber(total)}</div>
      </div>
    </div>
  );
};
