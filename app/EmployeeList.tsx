import React, { useEffect, useState } from 'react';

export function EmployeeList() {

  interface Employee {
    firstName: string;
    middleName: string;
    lastName: string;
    addressline: string
    roleId: number;
    id: number;
    employeeTypeId: number; 
    employmentDate: string
  }

  interface Role {
    title: string;
    role: Role;
  }
  
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    // Fetch employees from API
    // use async await

    // const function = async () => {
    //  await fetch(Apiendpoint,{headers,content/type,body})
    //  await response.json()
    // }

    fetch('/api/employees')
      .then(response => response.json())
      .then(data => setEmployees(data));
  }, []);

  return (
    <div>
      {employees.map(employee => (
        <div key={employee.id}>
          <h2>{employee.firstName} {employee.middleName} {employee.lastName}</h2>
          <p>{employee.role.title}</p>
          <p>{employee.employeeTypeId}</p>
          <p>{employee.addressline}</p>
          <p>{employee.employmentDate}</p>
        </div>
      ))}
    </div>
  );
}