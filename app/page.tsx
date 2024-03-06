'use client'

import { EmployeeList } from './EmployeeList';
import { AddEmployee } from './AddEmployee';

export default function Home() {
  return (
    <div>
      <h1>Employee Management System</h1>
      <AddEmployee />
      <EmployeeList />
    </div>
  );
}