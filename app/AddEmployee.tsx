

import React, { useState } from 'react';

export function AddEmployee() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    fetch('/api/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to add employee');
      }
      return response.json();
    })
    .then(data => {
      setFirstName('');
      setLastName('');
      setSuccess(true);
    })
    .catch(error => {
      setError(error.message);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>Error: {error}</p>}
      {success && <p>Employee added successfully!</p>}
      <label>
        First Name:
        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} disabled={loading} />
      </label>
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} disabled={loading} />
      </label>
      <input type="submit" value="Submit" disabled={loading} />
    </form>
  );
}