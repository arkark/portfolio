import type TableType from "@/types/TableType";

export type TableProps = TableType;

const Table: React.FC<TableProps> = ({ columns, items }) => {
  return (
    <>
      {/* <div className={`mt-4 overflow-auto`}> */}
      <table className="table my-0 text-nowrap">
        {columns && (
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th key={index}>{col}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {items.map((rows, rowIndex) => (
            <tr key={rowIndex}>
              {rows.map((item, colIndex) =>
                colIndex === 0 ? (
                  <th key={`${rowIndex}-${colIndex}`}>{item}</th>
                ) : (
                  <td key={`${rowIndex}-${colIndex}`}>{item}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {/* </div> */}
    </>
  );
};

export default Table;
