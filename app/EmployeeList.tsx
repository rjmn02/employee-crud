import React, { useEffect, useState } from 'react';

export function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employees from API
    fetch('/api/employees')
      .then(response => response.json())
      .then(data => setEmployees(data));
  }, []);

  return (
    <div>
      {employees.map(employee => (
        <div key={employee.id}>
          <h2>{employee.firstName} {employee.lastName}</h2>
          <p>{employee.role.title}</p>
          <p>{employee.employeeType.name}</p>
        </div>
      ))}
    </div>
  );
}