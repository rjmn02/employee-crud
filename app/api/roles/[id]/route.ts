import { NextResponse, NextRequest } from "next/server";
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest, {params}: {params: {id: string}}) {
  const roleId = parseInt(params.id, 10);
  const roles = await prisma.role.findUnique({
    where: {
      id: roleId
    }
  });
  return NextResponse.json(roles);
}

export async function PUT(req: NextRequest, {params}: {params: {id: string}}){
  const roleId = parseInt(params.id, 10);
  const data = await req.json();

  const updatedRole = await prisma.role.update({
    where: {
      id: roleId
    },
    data: {
      title: data.name || null,
      departmentId: data.departmentId || null
    } 
  });
  return NextResponse.json(updatedRole, {status: 200});
}

export async function PATCH(req: NextRequest, {params}: {params: {id: string}}){
  const roleId = parseInt(params.id, 10);
  const data = await req.json();

  const updatedRole = await prisma.role.update({
    where: {
      id: roleId
    },
    data: data
  });
  return NextResponse.json(updatedRole);
}

export async function DELETE(req: NextRequest, {params}: {params: {id: string}}){
  const roleId = parseInt(params.id, 10);
  const deletedRole = await prisma.role.delete({
    where: {
      id: roleId
    }
  });
  return NextResponse.json({status: 200});
}