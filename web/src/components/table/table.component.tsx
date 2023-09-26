interface TableProps {
  data: Record<string, string | number>[];
}
const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            {Object.keys(data?.[0]).map((title) => (
              <th>{title}</th>
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