import React, { useState, useRef, useEffect } from 'react';
import { LuPlus } from 'react-icons/lu';
import { useRouter } from 'next/navigation'
import { ErrorModal, SuccessModal } from './Modal';
import { EmployeeForm } from './EmployeeForm';


export function AddEmployee({onEmployeeAdded}: {onEmployeeAdded: () => void}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [barangay, setBarangay] = useState('');
  const [addressline, setAddressLine] = useState('');
  const [roleId, setRoleId] = useState(1);
  const [employeeTypeId, setEmploymentId] = useState(1);
  const [employmentDate, setEmploymentDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter()

  const dialogRef = useRef<HTMLDialogElement>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    let successModalTimeout: NodeJS.Timeout;
    let errorModalTimeout: NodeJS.Timeout;

    if (showSuccessModal) {
      successModalTimeout = setTimeout(() => {
        setShowSuccessModal(false);
      }, 3000); // 10 seconds
    }

    if (showErrorModal) {
      errorModalTimeout = setTimeout(() => {
        setShowErrorModal(false);
      }, 3000); // 10 seconds
    }

    return () => {
      clearTimeout(successModalTimeout);
      clearTimeout(errorModalTimeout);
    };
  }, [showSuccessModal, showErrorModal]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    setIsDialogOpen(false);

    if (!firstName || !middleName || !lastName || !email || !addressline || !city || !barangay || !roleId || !employeeTypeId || !employmentDate) {
       setError(null);
       setShowErrorModal(true);
       setLoading(false);
    return;
    }

    try {
      const response = await fetch('/api/employees', {
        method: 'POST',
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
        throw new Error('Failed to add employee');
      }
  
      const data = await response.json();
  
      setFirstName('');
      setMiddleName('');
      setLastName('');
      setEmail('');
      setRoleId(0);
      setEmploymentId(0);
      setAddressLine('');
      setCity('');
      setBarangay('');
      setEmploymentDate(new Date()); // Convert string to Date object
      setSuccess(true);
      dialogRef.current?.close();
      setShowSuccessModal(true);
      onEmployeeAdded(); // Call the function passed as a prop

    } catch (error: any) {
      setError(error.message);
      dialogRef.current?.close();
      setShowErrorModal(true);
    } finally {
      setLoading(false);
    }

  };

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  return (
    <div>
      <button className="btn btn-primary w-full mb-5 text-base 100 text-xl" onClick={openDialog}> Add Employee
        <LuPlus />
      </button>

      {isDialogOpen && (
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
                <button className='btn btn-primary block ' style={{ width: '373px' }} type='submit' disabled={loading}>Add Employee</button>
                <button className="btn" onClick={() => setIsDialogOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </dialog>
      )}

      <SuccessModal show={showSuccessModal} message="Employee was successfully Added." />
      <ErrorModal show={showErrorModal} message="Error: Failed To Add Employee"/>
    </div>
  );
}


