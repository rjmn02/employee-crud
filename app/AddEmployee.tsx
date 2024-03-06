import React, { useState } from 'react';
import { useRouter } from 'next/navigation'

export function AddEmployee() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [addressline, setAddressLine] = useState('')
  const [roleId, setRoleId] = useState(1);
  const [employeeTypeId, setEmploymentId] = useState(1);
  const [employmentDate, setEmploymentDate] = useState("1970-01-01T00:00:00.000Z");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter()

  const handleSubmit = (event: any) => {
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
        middleName,
        lastName,
        addressline, 
        roleId,
        employeeTypeId,
        employmentDate
      }),
    })
    // use async await instead of then catch
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to add employee');
      }
      return response.json();
    })
    .then(data => {
      setFirstName('');
      setMiddleName('');
      setLastName('');
      setRoleId(1);
      setEmploymentId(1);
      setAddressLine('');
      setEmploymentDate("1970-01-01T00:00:00.000Z");
      setSuccess(true);
    })
    .catch(error => {
      setError(error.message);
    })
    .finally(() => {
      router.refresh();
      // router.push('/');
      setLoading(false);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>Error: {error}</p>}
      {success && <p>Employee added successfully!</p>}
      <label>
        First Name:
        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
      </label>
      <label>
        Middle Name:
        <input type="text" value={middleName} onChange={e => setMiddleName(e.target.value)} />
      </label>
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
      </label>
      <input type="submit" value="Submit" disabled={loading} />
    </form>
  );
}