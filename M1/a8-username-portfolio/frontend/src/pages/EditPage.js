import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditPage() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('');
  const [date, setDate] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the document data for editing based on the ID
    const fetchDocument = async () => {
      try {
        const response = await fetch(`/log/${id}`);
        const document = await response.json();
        setName(document.name);
        setReps(document.reps);
        setWeight(document.weight);
        setUnit(document.unit);
        setDate(document.date);
      } catch (error) {
        console.error(`Error fetching document: ${id}`);
      }
    };

    fetchDocument();
  }, [id]);

  const updateDocument = async () => {
    const updatedDoc = { name, reps, weight, unit, date };
    const response = await fetch(`/log/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedDoc),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 200 || response.status === 204) {
      alert('Successfully updated document');
      navigate('/log');
    } else {
      alert('Failed to update document');
    }
  };

  return (
    <>
      <h2>Edit Page</h2>
      <article>
        <form>
          <label>
            Name:
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
          </label>
          <label>
            Reps:
            <input type="number" value={reps} onChange={e => setReps(e.target.value)} />
          </label>
          <label>
            Weight:
            <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
          </label>
          <label>
            Unit:
            <select value={unit} onChange={e => setUnit(e.target.value)}>
              <option value="kg">kg</option>
              <option value="lbs">lbs</option>
              <option value="g">g</option>
              <option value="oz">oz</option>
            </select>
          </label>
          <label>
            Date:
            <input type="date" value={date} onChange={e => setDate(e.target.value)} />
          </label>
          <button type="button" onClick={updateDocument}>
            Save
          </button>
        </form>
      </article>
    </>
  );
}

export default EditPage;
