import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePage() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const navigate = useNavigate();
  const [currency, setCurrency] = useState("");  // Add this line


  const addTransaction = async () => {
    const transaction = {
      description,
      amount: Number(amount),
      date,
      currency,
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
      navigate('/log');
    } else {
      alert('Failed to create transaction.');
    }
  };

  return (
    <>
      <h2>Create Page</h2>
      <article>
        <form>
          <div className="form-group">
            <label htmlFor="description">
              Description of Transaction:
            </label>
            <input 
              type="text" 
              id="description"
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              placeholder="Enter transaction description" />
          </div>
          <div className="form-group">
            <label htmlFor="amount">
                Amount:
              </label>
              <input 
                type="number" 
                id="amount"
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                placeholder="Enter the amount" />
          </div>
          <div className="form-group">
              <label htmlFor="currency">
                Currency:
              </label>
              <select 
                  id="currency"
                  value={currency}  
                  onChange={(e) => setCurrency(e.target.value)}>
                  <option value="">Select a Currency</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="JPY">JPY</option>
              </select>
          </div>
          <div className="form-group">
            <label htmlFor="date">
              Date:
            </label>
            <input 
              type="date" 
              id="date"
              value={date} 
              onChange={(e) => setDate(e.target.value)} />
          </div>
          <button type="button" onClick={addTransaction}>
            Add Transaction
          </button>
        </form>
      </article>
    </>
  );
}

export default CreatePage;
