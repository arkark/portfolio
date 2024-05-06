import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import type TableType from "@/types/TableType";

export type TableProps = TableType;

const Table: React.FC<TableProps> = ({ topN = 4, columns, items }) => {
  const useCollapse = items.length > topN;
  const [isHidden, setIsHidden] = useState<boolean>(useCollapse);

  return (
    <>
      <div className={`overflow-y-hidden ${isHidden ? "h-[13em]" : ""}`}>
        <table className="table my-1">
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
      </div>
      {useCollapse && (
        <div className="flex justify-center mt-2">
          <label className="swap swap-flip">
            <input
              type="checkbox"
              onClick={() => setIsHidden((prev) => !prev)}
            ></input>
            <div className="swap-off">
              <FaAngleDown className="size-8 inline"></FaAngleDown>
            </div>
            <div className="swap-on">
              <FaAngleUp className="size-8 inline"></FaAngleUp>
            </div>
          </label>
        </div>
      )}
    </>
  );
};

export default Table;
