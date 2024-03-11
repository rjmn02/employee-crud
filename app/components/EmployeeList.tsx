import React from 'react';
import { Employee, Role, Department, EmployeeType } from '@/lib/employeeInterface';

type EmployeeListProps = {
  employees: Employee[];
};

export const EmployeeList: React.FC<EmployeeListProps> = ({ employees }) => {
  return (
    <div className="overflow-x-auto ">
      <table className="rounded-b table w-full bg-info">
        {/* head */}
        <thead className='text-neutral text-base'>
          <tr>
            <th style={{padding: "0 0 0 3 rem"}}></th>
            <th >FullName & Email</th>
            <th>Role & Department</th>
            <th style={{padding: "0 0 0 5.5rem"}}>Address & City</th>
            <th style={{padding: "0 0 0 3.5rem"}}>Date & Time</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id} className={index % 2 === 0 ? '' : 'hover '}>
              <th>{index + 1}</th>
              <td>
              <div className="flex items-center gap-">
                <div>
                  <div className="font-bold">{employee.firstName} {employee.middleName} {employee.lastName}</div>
                  <div className="text-sm opacity-50">{employee.email}</div>
                </div>
              </div>
            </td>
            <td>
              {employee.role.department.name}
              <br />
              <span className="badge badge-ghost  badge-sm min-w-[ch20]">{employee.role.title}</span>
            </td>
            <td>{employee.addressline}, {employee.barangay}, {employee.city}</td>
            <td>{employee.employmentDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};