
export interface Employee {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  city: string;
  barangay: string;
  addressline: string;
  role: Role;
  id: number;
  employeeType: EmployeeType; 
  employmentDate: string;
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

export interface EmployeeFormProps {
  firstName: string;
  middleName: string;
  lastName: string;
  addressline: string;
  email: string;
  city: string;
  barangay: string;
  roleId: number;
  employeeTypeId: number;
  employmentDate: string;
  setFirstName: (value: string) => void;
  setMiddleName: (value: string) => void;
  setLastName: (value: string) => void;
  setEmail: (value: string) => void;
  setBarangay: (value: string) => void;
  setCity: (value: string) => void;
  setAddressLine: (value: string) => void;
  setRoleId: (value: number) => void;
  setEmploymentId: (value: number) => void;
  setEmploymentDate: (value: string) => void;
}

export interface ErrorModalProps {
  show: boolean;
  message: string; // Add this line
}

export interface SuccessModalProps {
  show: boolean;
  message: string; // Add this line
}