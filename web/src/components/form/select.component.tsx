interface SelectProps {
  options: {
    option: string;
    value: string;
  }[];
  title: string;
  ariaLabel?: string;
}
export const Select: React.FC<SelectProps> = ({ title, options, ariaLabel }) => {
  return (
    <select name={title} className="select w-full md:max-w-xs rounded-md h-10 px-3" defaultValue={title} aria-label={ariaLabel || title}>
      <option disabled value="">
        {title}
      </option>
      <>
        {options.map((opt) => (
          <option value={opt.value} key={opt.option}>{opt.option}</option>
        ))}
      </>
    </select>
  );
};
