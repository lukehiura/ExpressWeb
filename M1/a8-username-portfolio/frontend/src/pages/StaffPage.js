import React, { useState } from 'react';
import StaffRow from "../components/StaffRow.js";

function StaffPage() {
  const [results, setResults] = useState([]);

  const fetchData = () => {
    fetch('https://randomuser.me/api/?results=10')
      .then((response) => response.json())
      .then((data) => setResults(data.results))
      .catch((error) => {
        console.error("An error occurred while fetching the data: " + error.message);
      });
  };

  return (
    <>
      <h2>Staff Page</h2>
      <article>
        <p>This page showcases information about staff members. Click the button below to request data.</p>
        <button onClick={fetchData}>Get Staff Data</button>
        <table id="staffTable">
          <thead>
            <tr>
              <th>Portrait</th>
              <th>Name/Email</th>
              <th>Telephone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {results.map((person, i) => (
                <StaffRow person={person} key={i} />
            ))}
          </tbody>
        </table>
      </article>
    </>
  );
}

export default StaffPage;
