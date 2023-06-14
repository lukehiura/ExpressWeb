import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

function TableRowComponent({ transaction, onDelete, onEdit }) {
  const handleEdit = () => {
    onEdit(transaction._id);
  };

  const handleDelete = () => {
    onDelete(transaction._id);
  };

  return (
    <tr>
      <td>{transaction.description}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.date.slice(0, 10)}</td>
      <td>
        <FaEdit onClick={handleEdit} />
      </td>
      <td>
        <FaTrash onClick={handleDelete} />
      </td>
    </tr>
  );
}

export default TableRowComponent;
