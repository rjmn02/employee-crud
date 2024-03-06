-- Insert into Department
INSERT INTO "Department" (id, name) VALUES
(2, 'Human Resources'),
(3, 'Finance'),
(4, 'Marketing'),
(5, 'Sales'),
(6, 'Information Technology'),
(7, 'Customer Service');

-- Insert into Role
INSERT INTO "Role" (id, title, "departmentId") VALUES
(1, 'HR Manager', 2),
(2, 'HR Director', 2),
(3, 'Recruiter', 2),
(4, 'Compliance Officer', 2),
(5, 'Compensation and Benefits Specialist', 2),
(6, 'Chief Financial Officer', 3),
(7, 'Finance Manager', 3),
(8, 'Financial Analyst', 3),
(9, 'Accountant', 3),
(10, 'Treasury Manager', 3),
(11, 'Financial Compliance Officer', 3),
(12, 'Internal Auditor', 3),
(13, 'Risk Manager', 3),
(14, 'Marketing Director', 4),
(15, 'Brand Manager', 4),
(16, 'Product Manager', 4),
(17, 'Digital Marketing Specialist', 4),
(18, 'Market Research Analyst', 4),
(19, 'Public Relations (PR) Manager', 4),
(20, 'Graphic Designer', 4),
(21, 'Sales Analyst', 5),
(22, 'Sales Representative', 5),
(23, 'Technical Sales Specialist', 5),
(24, 'Sales Director', 5),
(25, 'IT Manager', 6),
(26, 'Systems Administrator', 6),
(27, 'Network Administrator', 6),
(28, 'Security Analyst', 6),
(29, 'QA Engineer', 6),
(30, 'Software Developer', 6),
(31, 'Customer Service Representative', 7),
(32, 'CSR Manager', 7);

-- Insert into EmployeeType
INSERT INTO "EmployeeType" (id, name) VALUES
(2, 'Part Time'),
(3, 'Retired'),
(4, 'Contractual'),
(1, 'Full Time');