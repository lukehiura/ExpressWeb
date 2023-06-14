import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePage() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const navigate = useNavigate();

  const addTransaction = async () => {
    const transaction = {
      description,
      amount: Number(amount),
      date,
    };

    const response = await fetch('/log', {
      method: 'POST',
      body: JSON.stringify(transaction),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 201) {
      alert('Successfully created transaction.');
      navigate('/transactions');
    } else {
      alert('Failed to create transaction.');
    }
  };

  return (
    <>
      <h2>Create Page</h2>
      <article>
        <form>
          <label>
            Description:
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>
          <label>
            Amount:
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
          </label>
          <label>
            Date:
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </label>
          <button type="button" onClick={addTransaction}>
            Add Transaction
          </button>
        </form>
      </article>
    </>
  );
}

export default CreatePage;
