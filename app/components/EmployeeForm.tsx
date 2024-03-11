import React, { ChangeEvent } from 'react';
import { EmployeeFormProps } from '@/lib/employeeInterface';

export const EmployeeForm: React.FC<EmployeeFormProps> = ({
  firstName,
  middleName,
  lastName,
  email,
  addressline,
  city,
  barangay,
  roleId,
  employeeTypeId,
  employmentDate,
  setFirstName,
  setMiddleName,
  setLastName,
  setEmail,
  setAddressLine,
  setCity,
  setBarangay,
  setRoleId,
  setEmploymentId,
  setEmploymentDate,
}) => {
  return (
    <>
      <div className="form-group">
        <label className="block mb-2"></label>
        <input 
          type="text" 
          placeholder='First Name'
          className="input input-bordered input-primary w-full p-1.5" 
          value={firstName} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)} 
        />
        <label className="block mb-2"></label>
        <input 
          type="text" 
          placeholder='Middle Name'
          className="input input-bordered input-primary w-full p-1.5" 
          value={middleName} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => setMiddleName(e.target.value)} 
        />
        <label className="block mb-2"></label>
        <input 
          type="text" 
          placeholder='Last Name'
          className="input input-bordered input-primary w-full p-1.5" 
          value={lastName} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)} 
        />
        <label className="block mb-2"></label>
        <input 
          type="text" 
          placeholder='Email'
          className="input input-bordered input-primary w-full p-1.5" 
          value={email} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
        />
        <label className="block mb-2"></label>
        <input 
          type="text" 
          placeholder='Address'
          className="input input-bordered input-primary w-full p-1.5" 
          value={addressline} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => setAddressLine(e.target.value)} 
        />
        <label className="block mb-2"></label>
        <input 
          type="text" 
          placeholder='City'
          className="input input-bordered input-primary w-full p-1.5" 
          value={city} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => setCity(e.target.value)} 
        />
        <label className="block mb-2"></label>
        <input 
          type="text" 
          placeholder='Barangay'
          className="input input-bordered input-primary w-full p-1.5" 
          value={barangay} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => setBarangay(e.target.value)} 
        />
        <label className="block mb-2"></label>
        <select 
          className="input input-bordered input-primary w-full p-1.5 no-scrollbar" 
          value={roleId} 
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setRoleId(Number(e.target.value))}
        >
          <option value="">Select Role</option>
          <option value="1">HR Manager</option>
          <option value="2">HR Director</option>
          <option value="3">Recruiter</option>
          <option value="4">Compliance Officer</option>
          <option value="5">Compensation and Benefits Specialist</option>
          <option value="6">Chief Financial Officer</option>
          <option value="7">Finance Manager</option>
          <option value="8">Financial Analyst</option>
          <option value="9">Accountant</option>
          <option value="10">Treasury Manager</option>
          <option value="11">Financial Compliance Officer</option>
          <option value="12">Internal Auditor</option>
          <option value="13">Risk Manager</option>
          <option value="14">Marketing Director</option>
          <option value="15">Brand Manager</option>
          <option value="16">Product Manager</option>
          <option value="17">Digital Marketing Specialist</option>
          <option value="18">Market Research Analyst</option>
          <option value="19">Public Relations (PR) Manager</option>
          <option value="20">Graphic Designer</option>
          <option value="21">Sales Analyst</option>
          <option value="22">Sales Representative</option>
          <option value="23">Technical Sales Specialist</option>
          <option value="24">Sales Director</option>
          <option value="25">IT Manager</option>
          <option value="26">Systems Administrator</option>
          <option value="27">Network Administrator</option>
          <option value="28">Security Analyst</option>
          <option value="29">QA Engineer</option>
          <option value="30">Software Developer</option>
          <option value="31">Customer Service Representative</option>
          <option value="32">CSR Manager</option>
        </select>

        <label className="block mb-2"></label>
        <select 
          className="input input-bordered input-primary w-full p-1.5 no-scrollbar" 
          value={employeeTypeId} 
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setEmploymentId(Number(e.target.value))}
        >
          <option value="">Select Employee Type</option>
          <option value="1">Part-Time</option>
          <option value="2">Retired</option>
          <option value="3">Contractual</option>
          <option value="4">Full-Time</option>
        </select>
        <label className="block mb-2"></label>
        <input 
          type="datetime-local" 
          className="input input-bordered input-primary w-full p-1.5" 
          value={employmentDate} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmploymentDate(e.target.value)} 
        />
      </div>
    </>
  );
};