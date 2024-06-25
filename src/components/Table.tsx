import React from 'react';
import { StudentType, User } from '../types';

interface TableProps {
  columns: string[];
  data: StudentType[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {

    const columnKeys: { [key: string]: keyof User } = {
    Name: 'username',
    Email: 'email',
    Department: 'department'
  };

  return (
    <div className="table-container">
      <table className="beautiful-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((user, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>{user[columnKeys[col]]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
