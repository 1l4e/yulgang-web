"use client"
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
const XepHangHome = ({tops}) => {
  return (
    <Table>
    <TableCaption>Xếp hạng nhân vật theo cấp độ</TableCaption>
    <TableHeader >
      <TableRow>
      <TableHead>ID</TableHead>
        <TableHead className="w-[100px]">Tên</TableHead>
        <TableHead className="text-right">Cấp</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {tops.map((item:any,index:number)=> (
        <TableRow key={index}>
        <TableCell className="font-medium">{index+1}</TableCell>
          <TableCell className="font-medium">{item.FLD_NAME}</TableCell>
          <TableCell className="text-right">{item.FLD_LEVEL}/{item.FLD_ZS}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
  
  )
}

export default XepHangHome