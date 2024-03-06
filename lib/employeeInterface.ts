
export interface Employee {
  firstName: string;
  middleName: string;
  lastName: string;
  addressline: string
  role: Role;
  id: number;
  employeeType: EmployeeType; 
  employmentDate: string
}

export interface Role {
  title: string;
  department: Department
}

export interface EmployeeType {
  name: string
}

export interface Department {
  name: string;
}
