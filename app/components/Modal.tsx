import React, { ReactNode, useRef } from 'react';
import { ErrorModalProps, SuccessModalProps } from '@/lib/employeeInterface';
 
  export const ErrorModal: React.FC<ErrorModalProps> = ({ show }) => {
    if (!show) return null;
  
    return (
      <div className='bg-error' style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', padding: '20px 80px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <p className='font-bold'>Error: Failed To Add Employee</p>
      </div>
    );
  };
 
  export const SuccessModal: React.FC<SuccessModalProps> = ({ show }) => {
    if (!show) return null;
  
    return (
      <div className='bg-success' style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <p className='font-bold'>Employee Added Successfully!</p>
      </div>
    );
  };