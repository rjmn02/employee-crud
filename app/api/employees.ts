import { NextApiResponse, NextApiRequest } from "next";
import prisma from "../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method){
    case 'GET':
      if(req.query.id){
        const employees = await prisma.employee.findUnique({
          where: {
            id: parseInt(req.query.id as string)
          }
        });
        res.status(200).json(employees);
      
      } else {
        const employees = await prisma.employee.findMany();
        res.status(200).json(employees);
      }

      res.status(400).json({message: 'Missing Employee'});
      break;

    case 'POST':
      const {firstName, middleName, lastName, addressline, roleId, employeeTypeId, employmentDate} = req.body
      if(!firstName || !middleName || !lastName || !addressline || !roleId || !employeeTypeId || !employmentDate){
        const result = await prisma.employee.create({
          data: {
            firstName,
            middleName,
            lastName,
            addressline,
            role: {connect: {id: roleId}},
            employeeType: {connect: {id: employeeTypeId}},
            employmentDate,
          },
        })
        res.status(200).json(result);
        break;
      }
      res.status(400).json({message: 'Missing fields'});
    case 'PUT':
      if(req.query.id){
        const {firstName, middleName, lastName, addressline, roleId, employeeTypeId, employmentDate} = req.body
        const newEmployeeValues = await prisma.employee.update({
          where: {
            id: parseInt(req.query.id as string)
          },
          data: {
            firstName,
            middleName,
            lastName,
            addressline,
            role: {connect: {id: roleId}},
            employeeType: {connect: {id: employeeTypeId}},
            employmentDate,
          },
        })
        res.status(200).json(newEmployeeValues);
      }
      res.status(400).json({message: 'No ID'});
      
      break;

    case 'DELETE':
      if(req.query.id){
        const employee = await prisma.employee.delete({
          where: {
            id: parseInt(req.query.id as string)
          }
        });
        res.status(200).json(`employee {message: 'Employee Deleted'}`);
        break;
      }
      res.status(400).json({message: 'No ID'});
      break;
      
    default:
      res.status(400).json({message: 'Method not allowed'});
      break;
  }
}