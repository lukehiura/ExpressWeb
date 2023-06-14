import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';
import TableRowComponent from './TableRowComponent';

function TableComponent({ collection, deleteFunction, editFunction }) {
  return (
    <>
      <table>
        <caption>
          <Link to="/transactions/create">
            <FaPlusCircle />
          </Link>
        </caption>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {collection.map((transaction) => (
            <TableRowComponent
              key={transaction._id}
              transaction={transaction}
              onDelete={deleteFunction}
              onEdit={editFunction}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TableComponent;
