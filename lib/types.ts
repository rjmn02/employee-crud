import { EmployeeType, Role } from "@prisma/client";

interface Employee {
  firstName: string;
  middleName: string;
  lastName: string;
  addressline: string
  Role: Role;
  id: number;
  employeeType: EmployeeType; 
  employmentDate: string
}
