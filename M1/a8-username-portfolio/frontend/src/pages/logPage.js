import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TableComponent from '../components/TableComponent.js';

function LogPage() {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const response = await fetch('/log'); 
      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
      } else {
        const data = await response.json();
        setTransactions(data);
      }
    } catch (error) {
      console.error('Failed to fetch transactions:', error);
    }
  };

  // const createTransaction = () => {
  //   navigate('/log/create');
  // };

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
      <p>The logging function in this application allows you to keep track of your transactions and easily manage them. With this feature, you can record details such as the description, amount, and date of each transaction you make.</p>
      <p> By logging your transactions, you gain several benefits. Firstly, it helps you maintain a comprehensive record of your financial activities, providing you with a clear overview of your spending habits and financial health. You can easily refer back to this log to track your expenses, identify patterns, and make informed decisions about your budget.</p>
      <p>Additionally, the logging function enables you to update and edit transactions as needed. If you made an error or need to modify any details, you can quickly access the transaction and make the necessary changes. This ensures the accuracy and integrity of your transaction history.</p>
      <p>Furthermore, the logging feature serves as a memory aid, helping you recall past transactions and their specific details. Whether you need to reference a particular expense or reconcile your records, having a centralized log makes it effortless to retrieve the information you need.</p>
      <p>With the user-friendly interface provided by this application, you can easily create, view, update, and delete transactions. The log page presents a table displaying all your transactions, including their descriptions, amounts, and dates. You can edit or delete any transaction directly from the table, providing a streamlined experience.</p>
      <p>In summary, the logging function empowers you to effectively manage your financial transactions by providing a centralized and accessible record. Whether you want to track your expenses, make updates, or simply maintain a reliable transaction history, this feature serves as a valuable tool for financial organization and awareness.</p>
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
