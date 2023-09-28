import { formattedNumber } from '../../utils/strings';
interface CardProps {
  description?: string;
  total: number;
}
export const Card: React.FC<CardProps> = ({description, total}) => {
  return (
    <section className="stats shadow md:w-52 w-32 flex mx-auto h-max-20" aria-label={`${description}`} role="region" aria-labelledby="kpisHeading">
      <div className="stat">
        <div className="stat-title md:text-lg  text-sm">{description}</div>
        <div className="md:stat-value font-bold md:text-4xl text-2lx">{formattedNumber(total)}</div>
      </div>
    </section>
  );
};
