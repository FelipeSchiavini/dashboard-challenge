import { formattedNumber } from "../../utils/strings";
interface CardProps {
  description?: string;
  total: number;
  tooltip?: string;
}
export const Card: React.FC<CardProps> = ({ description, total, tooltip }) => {
  return (
    <div className="tooltip" data-tip={tooltip} aria-label={tooltip} role="presentation">
      <section
        className="stats shadow md:w-52 w-32 flex mx-auto h-max-20"
        aria-label={`${description}`}
        role="region"
        aria-labelledby="kpis Heading"
      >
        <div className="stat">
          <div className="stat-title md:text-lg  text-sm">{description}</div>
          <div className="md:stat-value font-bold md:text-4xl text-2lx">
            {formattedNumber(total)}
          </div>
        </div>
      </section>
    </div>
  );
};
