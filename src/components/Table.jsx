import React, { useState } from "react";
import { useTable } from "react-table";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineSave } from "react-icons/ai";
import { InputEdit } from "./InputEdit";

function MyTable({ data, onDelete, onEdit }) {
  const [isEditMode, setIsEditMode] = useState(false)
  const [nameValue, setNameValue] = useState('');
  const [surnameValue, setSurnameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneNumberValue, setPhoneNumberValue] = useState('');

  const handleEditClick = (row) => {
    setIsEditMode(row.id);
    setNameValue(row.values.name);
    setSurnameValue(row.values.surname);
    setPhoneNumberValue(row.values.phone_number);
    setEmailValue(row.values.email);
  };

  const handleSaveClick = (row) => {
    if (isEditMode === row.id) {
      setIsEditMode(false);
      const updatedData = {
        name: nameValue,
        surname: surnameValue,
        email: emailValue,
        phone_number: phoneNumberValue,
      };
      onEdit(data[row.id].id, updatedData);
    }
  };
  
  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurnameValue(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumberValue(event.target.value);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        Cell: ({ row }) =>
        isEditMode === row.id ? (
            <InputEdit
              value={nameValue}
              handleChange={handleNameChange}
            />
          ) : (
            row.values.name
          ),
      },
      {
        Header: "Surname",
        accessor: "surname",
        Cell: ({ row }) =>
          isEditMode === row.id ? (
            <InputEdit
              value={surnameValue}
              handleChange={handleSurnameChange}
            />
          ) : (
            row.values.surname
          ),
      },
      {
        Header: "Email",
        accessor: "email",
        Cell: ({ row }) =>
          isEditMode === row.id ? (
            <InputEdit
              value={emailValue}
              handleChange={handleEmailChange}
            />
          ) : (
            row.values.email
          ),
      },
      {
        Header: "Phone",
        accessor: "phone_number",
        Cell: ({ row }) =>
          isEditMode === row.id ? (
            <InputEdit
              value={phoneNumberValue}
              handleChange={handlePhoneNumberChange}
            />
          ) : (
            row.values.phone_number
          ),
      },
      {
        Header: " ",
        Cell: ({ row }) => (
          <div>
            {isEditMode === row.id ? (
              <a onClick={() => handleSaveClick(row)}>
                <AiOutlineSave className="tableButtons" />
              </a>
            ) : (
              <a onClick={() => handleEditClick(row)}>
                <AiOutlineEdit className="tableButtons" />
              </a>
            )}
            <a onClick={() => onDelete(row.original.id)} style={{marginLeft: '10px'}}>
              <AiOutlineDelete className="tableButtons" />
            </a>
          </div>
        ),
      },
    ],
    [isEditMode, nameValue, surnameValue, emailValue, phoneNumberValue]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="mytable">
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