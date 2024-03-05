import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest, {params}: {params: {id: string}}) {
  const departmentId = parseInt(params.id, 10)
  const department = await prisma.department.findUnique({
    where: { 
      id: departmentId
    }
  });
  return NextResponse.json(department)
}

export async function PUT(req: NextRequest, {params}: {params: {id: string}}) {
  const departmentId = parseInt(params.id, 10)
  const data = await req.json()
  const updatedDepartment = await prisma.department.update({
    where: {
      id: departmentId
    },
    data: {
      name: data.name || null
    } 
  });
  return NextResponse.json(updatedDepartment, {status: 200});

}

export async function PATCH(req: NextRequest, {params}: {params: {id: string}}) {
  const departmentId = parseInt(params.id, 10)
  const data = await req.json()
  const updatedDepartment = await prisma.department.update({
    where: {
      id: departmentId
    },
    data: data
  });
  return NextResponse.json(updatedDepartment);
}


export async function DELETE(req: NextRequest, {params}: {params: {id: string}}) {
  const departmentId = parseInt(params.id, 10)
  const deletedDepartment = await prisma.department.delete({
    where: {
      id: departmentId
    }
  });
  return NextResponse.json({status: 200});
}
