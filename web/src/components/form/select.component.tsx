import { MoreThanOneTransactionEnum } from "../../store/transaction.store";

interface SelectProps {
  options: string[];
  title: string;
}
export const Select: React.FC<SelectProps> = ({ title, options }) => {
  return (
    <select name={title} className="select w-full md:max-w-xs rounded-md h-10 px-3" defaultValue={title}>
      <option disabled value="">
        {title}
      </option>
      <>
        {options.map((opt) => (
          <option value={opt === MoreThanOneTransactionEnum.All ? "" : opt} key={opt}>{opt}</option>
        ))}
      </>
    </select>
  );
};
