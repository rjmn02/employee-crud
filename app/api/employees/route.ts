import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest){
  const employees = await prisma.employee.findMany({
    include: {
      role: {
        select: {
          title: true,
          department: {
            select: {
              name: true
            }
          }
        }
      },
      employeeType: {
        select: {
          name: true
        }
      }
    }
  })
  return NextResponse.json(employees);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  
  const newEmployee = await prisma.employee.create({
    data: data
  });

  return NextResponse.json(newEmployee);
}