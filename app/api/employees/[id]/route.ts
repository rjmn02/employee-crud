import { NextResponse, NextRequest } from "next/server";
import prisma from '@/lib/prisma';
import { tree } from "next/dist/build/templates/app-page";

export async function GET(req: NextRequest, {params}: {params: {id: string}}){
  const employeeId = parseInt(params.id, 10);
  const employees = await prisma.employee.findUnique({
    include: {
      role: {
        select: {
          title: true
        }
      },
      employeeType: {
        select: {
          name: true
        }
      }
    },
    where: {
      id: employeeId
    }
  })
  return NextResponse.json(employees);
}

export async function PUT(req: NextRequest, {params}: {params: {id: string}}) {
  const employeeId = parseInt(params.id, 10);
  const data = await req.json();

  const updatedEmployee = await prisma.employee.update({
    where: {
      id: employeeId
    },
    data: {
      firstName: data.firstName || null,
      middleName: data.middleName || null,
      lastName: data.lastName || null,
      addressline: data.addressline || null,
      role: data.role || null,
      employeeType: data.employeeType || null,
      employmentDate: data.employmentDate || null
    }
  });

  return NextResponse.json(updatedEmployee, {status: 200});
}

export async function PATCH(req: NextRequest, {params}: {params: {id: string}}) {
  const employeeId = parseInt(params.id, 10);
  const data = await req.json();

  const updatedEmployee = await prisma.employee.update({
    where: {
      id: employeeId
    },
    data: data
  });
  return NextResponse.json(updatedEmployee);
}

export async function DELETE(req: NextRequest, {params}: {params: {id: string}}) {
  const employeeId = parseInt(params.id, 10);
  const deletedEmployee = await prisma.employee.delete({
    where: {
      id: employeeId
    }
  });
  return NextResponse.json({status: 200});
}
