import { NextResponse, NextRequest } from "next/server";
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest, {params}: {params: {id: string}}){
  const employeeTypeId = parseInt(params.id, 10);
  const employeeTypes = await prisma.employeeType.findUnique({
    where: {
      id: employeeTypeId
    }
  })
  return NextResponse.json(employeeTypes);
}

export async function PUT(req: NextRequest, {params}: {params: {id: string}}) {
  const employeeTypeId = parseInt(params.id, 10);
  const data = await req.json();

  const updatedEmployeeType = await prisma.employeeType.update({
    where: {
      id: employeeTypeId
    },
    data: {
      name: data.name || null
    }
  });

  return NextResponse.json(updatedEmployeeType, {status: 200});
}

export async function PATCH(req: NextRequest, {params}: {params: {id: string}}) {
  const employeeTypeId = parseInt(params.id, 10);
  const data = await req.json();

  const updatedEmployeeType = await prisma.employeeType.update({
    where: {
      id: employeeTypeId
    },
    data: data
  });
  return NextResponse.json(updatedEmployeeType);
}

export async function DELETE(req: NextRequest, {params}: {params: {id: string}}) {
  const employeeTypeId = parseInt(params.id, 10);
  const deletedEmployeeType = await prisma.employeeType.delete({
    where: {
      id: employeeTypeId
    }
  });
  return NextResponse.json({status: 200});
}
