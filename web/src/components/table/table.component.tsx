interface TableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>[];
}
const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto" role="region" tabIndex={0}>
      <table className="table" aria-label="table">
        <thead>
          <tr>
            {Object.keys(data?.[0]).map((title) => (
              <th key={title} scope="col">{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {Object.keys(item).map((key, cellIndex) => (
                <td key={cellIndex}>{item[key]}</td>
              ))}
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
};

export default Table