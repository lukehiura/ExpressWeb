import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditPage() {
  const { id } = useParams();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [currency, setCurrency] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const response = await fetch(`/log/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const transaction = await response.json();
        setDescription(transaction.description);
        setAmount(transaction.amount.toString());
        setDate(transaction.date.slice(0, 10));
        setCurrency(transaction.currency);
      } catch (error) {
        console.error(`Error fetching transaction: ${error.message}`);
      }
    };
  
    fetchTransaction();
  }, [id]);

  const updateTransaction = async () => {
    try {
      const updatedTransaction = {
        description,
        amount: Number(amount),
        date,
        currency,
      };
  
      const response = await fetch(`/log/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedTransaction),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      if (response.status === 200 || response.status === 204) {
        alert('Successfully updated transaction');
        navigate('/log');
      } else {
        alert('Failed to update transaction');
      }
    } catch (error) {
      console.error(`Error updating transaction: ${error.message}`);
    }
  };
  

  return (
    <>
      <h2>Edit Page</h2>
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
                {/* Add more currencies as needed */}
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
          <button type="button" onClick={updateTransaction}>
            Save
          </button>
        </form>
      </article>
    </>
  );
}

export default EditPage;
