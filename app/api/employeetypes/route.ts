import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest){
  const employeeTypes = await prisma.employeeType.findMany()
  return NextResponse.json(employeeTypes);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const newEmployeeType = await prisma.employeeType.create({
    data: data
  });

  return NextResponse.json(newEmployeeType);
} 