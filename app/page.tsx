'use client'

import { EmployeeManagement } from './components/EmployeeManagement';

export default function Home() {
  return (
    <main className='max-w-7xl mx-auto mt-4'>
      <div className='text-center my-5 flex-col gap-4'>
      <h1 className='text-4xl font-bold'>Employee Management System</h1>
      </div>
      <EmployeeManagement/>
    </main>
  );
}