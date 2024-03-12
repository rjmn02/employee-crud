import React, {useState} from 'react';
import { Employee, Role, Department, EmployeeType } from '@/lib/employeeInterface';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { EditEmployee } from './EditEmployee';
import { deleteEmployee } from './DeleteEmployee';

type EmployeeListProps = {
  employees: Employee[];
  onEmployeeUpdated: () => void;
};

export const EmployeeList: React.FC<EmployeeListProps> = ({ employees, onEmployeeUpdated }) => {
  
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editEmployeeId, setEditEmployeeId] = useState(null);

  const handleEditClick = (employeeId: any) => {
    setEditEmployeeId(employeeId);
    setIsEditOpen(true);
  };

  const handleEmployeeUpdated = () => {
    setIsEditOpen(false);
    onEmployeeUpdated();
    // Fetch the updated list of employees here
  };

  const handleDelete = async (employee: any) => {
    try {
      await deleteEmployee(employee);
      // Handle UI updates here, like removing the employee from the list or showing a success message
    } catch (error) {
      // Handle errors here, like showing an error message to the user
    }
  };
  
  return (
    <div className="overflow-x-auto ">
      <table className="rounded-b table w-full bg-base-100">
        {/* head */}
        <thead className='text-neutral text-base'>
          <tr>
            <th style={{padding: "0 0 0 3 rem"}}></th>
            <th >FullName & Email</th>
            <th>Role & Department</th>
            <th style={{padding: "0 0 0 5.5rem"}}>Address & City</th>
            <th style={{padding: "0 0 0 3.5rem"}}>Date & Time</th>
            <th style={{padding: "0 0 0 0.8rem"}}>Actions</th>
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
            <td className='flex gap-4 '>
              <FaRegEdit cursor='pointer' className='text-info' size={21} onClick={() => handleEditClick(employee.id)} />
                {isEditOpen && editEmployeeId === employee.id && (
                  <EditEmployee
                    employee={employee}
                    onEmployeeUpdated={onEmployeeUpdated}
                    isDialogOpen={isEditOpen}
                    setIsDialogOpen={setIsEditOpen}
                  />
                )}

                <FaRegTrashAlt 
                  cursor='pointer' 
                  className='text-error' 
                  size={21} 
                  onClick={() => handleDelete(employee)}
                />
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};