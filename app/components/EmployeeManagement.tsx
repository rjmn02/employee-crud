import React, { useState, useEffect } from 'react';
import { EmployeeList } from './EmployeeList';
import { AddEmployee } from './AddEmployee';

export const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const response = await fetch('/api/employees');
    const data = await response.json();
    setEmployees(data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <>
      <AddEmployee onEmployeeAdded={fetchEmployees} />
      <EmployeeList employees={employees} />
    </>
  );
};