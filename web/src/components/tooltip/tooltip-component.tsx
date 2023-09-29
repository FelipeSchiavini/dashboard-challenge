interface RightTooltip {
  tooltip: number | string;
  value: number | string;
}
export const RightTooltip: React.FC<RightTooltip> = ({ value, tooltip }) => {
  return (
    <div
      className="tooltip tooltip-right hover:cursor-pointer"
      data-tip={tooltip}
      role="presentation"
    >
      {value}
    </div>
  );
};
