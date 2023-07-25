import { Skeleton } from "@/components/ui/skeleton"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { generateArray } from "@/lib/utils/reader";

const Loading = () => {
    const data = generateArray(50);
  return (
    <div className="container mx-auto">
        <h1 className="text-3xl text-center py-4"><Skeleton className="h-8  mx-auto w-[250px]" /></h1>
    <div className="py-8">
      <Table>
 
        <TableHeader>
          <TableRow className="text-sm md:text-md">
            <TableHead><Skeleton className="h-4  text-center  w-[50px]" /></TableHead>
            <TableHead ><Skeleton className="h-4  text-center  w-[50px]" /></TableHead>
            <TableHead className="hidden md:table-cell"><Skeleton className="h-4  text-center  w-[50px]" /></TableHead>
            <TableHead className="hidden md:table-cell"><Skeleton className="h-4  text-center  w-[50px]" /></TableHead>
            <TableHead ><Skeleton className="h-4  text-center  w-[50px]" /></TableHead>
            <TableHead className="hidden md:table-cell"><Skeleton className="h-4  text-center  w-[50px]" /></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
         
            {data?.map((item:any,index:number)=> (
               <TableRow key={index} className="text-sm md:text-md">
                  <TableCell>{index+1}</TableCell>
                  <TableCell className="text-blue-500 hover:text-blue-600 relative"><Skeleton className="h-4  text-center  w-[50px]" /></TableCell>
                  <TableCell className={`py-1  md:table-cell hidden relative `}><Skeleton className="h-4  text-center  w-[50px]" /></TableCell>
                  <TableCell className="hidden md:table-cell"><Skeleton className="h-4  text-center  w-[50px]" /></TableCell>
                  <TableCell ><Skeleton className="h-4  text-center  w-[50px]" /></TableCell>
                  <TableCell className="hidden md:table-cell"><Skeleton className="h-4  text-center  w-[50px]" /></TableCell>
               </TableRow>
              
            ))}
            
        </TableBody>
      </Table>
    </div>
  </div>
  )
}

export default Loading