import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TableComponent from '../components/TableComponent.js';
import EditPage from './EditPage.js';

function LogPage() {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const response = await fetch('/log'); // Updated route
    const data = await response.json();
    setTransactions(data);
  };

  const createTransaction = () => {
    navigate('/log/create');
  };

  const updateTransaction = (id) => {
    navigate(`/log/edit/${id}`);
  };

  const deleteTransaction = async (id) => {
    const response = await fetch(`/log/${id}`, { method: 'DELETE' });
    if (response.status === 204) {
      fetchTransactions();
    } else {
      console.error(`Error deleting transaction: ${id}, status code: ${response.status}`);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <>
      <h2>Log Page</h2>
      <article>
        {/* Descriptive paragraph */}
        <TableComponent
          collection={transactions}
          deleteFunction={deleteTransaction}
          editFunction={updateTransaction}
        />
      </article>
    </>
  );
}

export default LogPage;
