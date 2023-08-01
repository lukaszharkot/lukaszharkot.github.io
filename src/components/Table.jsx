import * as React from "react";
import { useTable } from "react-table";

function MyTable({data, onDelete}) {

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        width: "50px",
      },
      {
        Header: "Surname",
        accessor: "surname",
        width: "50px",
      },
      {
        Header: "Phone Number",
        accessor: "phone_number",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: " ",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div style={{ height: "492px", width: '692px', overflow: "auto", borderRadius: '9px'}}>
      <table
        {...getTableProps()}
        style={{ fontSize: "11px", tableLayout: "fixed", width: "100%" }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    whiteSpace: "nowrap",
                    fontSize: "12px",
                    fontFamily: "monospace",
                    padding: "16px", // Adjust the padding as needed
                    margin: "0", // Adjust the margin as needed
                    textAlign: 'center',
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      whiteSpace: "nowrap",
                      fontSize: "12px",
                      fontFamily: "monospace",
                      padding: "15px", // Adjust the padding as needed
                      margin: "0", // Adjust the margin as needed
                      color: 'black',
                      textAlign: 'center',
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MyTable;
