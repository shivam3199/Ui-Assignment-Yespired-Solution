import React from "react";
import "./Table.scss";

const Table = ({ data }) => {
  const columns = data.length > 0 ? Object.keys(data[0]) : [];
  return (
    <div className="data-table">
      <div className="table-header">
        {columns.map((column, index) => (
          <div key={index} className="table-header-cell">
            {column}
          </div>
        ))}
      </div>
      <div className="table-body">
        {data.map((item, index) => (
          <div key={index} className="table-row">
            {columns.map((column, index) => (
              <div key={index} className="table-cell">
                <div className="rowHeader"> {column.toLocaleUpperCase()}</div>
                {item[column]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
