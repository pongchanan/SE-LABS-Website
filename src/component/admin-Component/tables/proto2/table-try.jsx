import React from "react";
import { useTable } from "react-table";

const TableComponent = () => {
  // Define the columns
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name", // accessor is the "key" in the data
      },
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Country",
        accessor: "country",
      },
    ],
    []
  );

  // Sample data
  const data = React.useMemo(
    () => [
      {
        id: 1,
        name: "John Doe",
        age: 28,
        email: "john@example.com",
        country: "USA",
      },
      {
        id: 2,
        name: "Jane Smith",
        age: 34,
        email: "jane@example.com",
        country: "UK",
      },
      {
        id: 3,
        name: "Sam Wilson",
        age: 22,
        email: "sam@example.com",
        country: "Canada",
      },
      {
        id: 4,
        name: "Sara Connor",
        age: 30,
        email: "sara@example.com",
        country: "Australia",
      },
    ],
    []
  );

  // Create an instance of the table
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table
      {...getTableProps()}
      style={{ border: "solid 1px black", width: "100%" }}
    >
      <thead>
        {headerGroups.map((headerGroup, headerGroupIndex) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            key={`header-group-${headerGroupIndex}`}
          >
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                key={column.id} // Ensure the key is unique
                style={{ border: "solid 1px black", padding: "10px" }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, rowIndex) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={`row-${rowIndex}`}>
              {/* Unique key for each row */}
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  key={`cell-${rowIndex}-${cell.column.id}`} // Ensure unique key for each cell
                  style={{ border: "solid 1px black", padding: "10px" }}
                >
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
