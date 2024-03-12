import React, { useState, useRef, useEffect } from 'react';
import { EmployeeForm } from './EmployeeForm';
import { ErrorModal, SuccessModal } from './Modal';

export function EditEmployee({ employee, onEmployeeUpdated, isDialogOpen, setIsDialogOpen }: { employee: any, onEmployeeUpdated: () => void, isDialogOpen: boolean, setIsDialogOpen: (isOpen: boolean) => void }) {
  const [firstName, setFirstName] = useState(employee.firstName);
  const [lastName, setLastName] = useState(employee.lastName);
  const [middleName, setMiddleName] = useState(employee.middleName);
  const [email, setEmail] = useState(employee.email);
  const [city, setCity] = useState(employee.city);
  const [barangay, setBarangay] = useState(employee.barangay);
  const [addressline, setAddressLine] = useState(employee.addressline);
  const [roleId, setRoleId] = useState(employee.roleId);
  const [employeeTypeId, setEmploymentId] = useState(employee.employeeTypeId);
  const [employmentDate, setEmploymentDate] = useState(new Date(employee.employmentDate));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    setFirstName(employee.firstName);
    setLastName(employee.lastName);
    setMiddleName(employee.middleName);
    setEmail(employee.email);
    setCity(employee.city);
    setBarangay(employee.barangay);
    setAddressLine(employee.addressline);
    setRoleId(employee.roleId);
    setEmploymentId(employee.employeeTypeId);
    setEmploymentDate(new Date(employee.employmentDate));
  }, [employee]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
  
    try {
      const response = await fetch(`/api/employees/${employee.id}`, {
        method: 'PATCH',
        headers: {  
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          middleName,
          lastName,
          email,
          addressline,
          city,
          barangay, 
          roleId,
          employeeTypeId,
          employmentDate
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to Edit Employee');
      }
  
      const data = await response.json();
  
      resetForm();
      setSuccess(true);
      onEmployeeUpdated();
    } catch (error: any) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
      setIsDialogOpen(false);
    }
  };
  
  const resetForm = () => {
    setFirstName('');
    setMiddleName('');
    setLastName('');
    setEmail('');
    setRoleId(0);
    setEmploymentId(0);
    setAddressLine('');
    setCity('');
    setBarangay('');
    setEmploymentDate(new Date());
  };

  return (
    <div>
      
      <ErrorModal show={!!error} message={error || ''} />
      <SuccessModal show={success} message="Employee edited successfully!" />

      {isDialogOpen && (
        <div>
          <dialog open className="modal modal-bottom sm:modal-middle">
            <div className="modal-box text-center no-scrollbar">
              <h2 className="font-bold text-2xl mb-4" >Employee Information</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <EmployeeForm
                  firstName={firstName}
                  middleName={middleName}
                  lastName={lastName}
                  email={email}
                  addressline={addressline}
                  city={city}
                  barangay={barangay}
                  roleId={roleId}
                  employeeTypeId={employeeTypeId}
                  employmentDate={employmentDate.toISOString()}
                  setFirstName={setFirstName}
                  setMiddleName={setMiddleName}
                  setLastName={setLastName}
                  setEmail={setEmail}
                  setAddressLine={setAddressLine}
                  setCity={setCity}
                  setBarangay={setBarangay}
                  setRoleId={setRoleId}
                  setEmploymentId={setEmploymentId}
                  setEmploymentDate={(value: string) => setEmploymentDate(new Date(value))}
                />

                <div className="modal-action">
                  <button className='btn btn-primary block ' style={{ width: '373px' }} type='submit' disabled={loading}>Edit Employee</button>
                  <button className="btn" onClick={() => setIsDialogOpen(false)}>Cancel</button>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
}