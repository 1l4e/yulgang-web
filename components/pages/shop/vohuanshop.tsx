import {  findManyVHuanShop } from "@/models/shop.server"
import Link from 'next/link'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {  num } from "@/lib/utils/reader";
import Image from "next/image";



const VoHuanShop = async ({params,searchParams}) => {
    let {page} = searchParams;
    if (!page || +page <0) page =0;

    if (Number.isNaN(+page)) page = 0
    const data = await findManyVHuanShop(50,page)
    const cpath = `/${params.slug}`
    if (data.length === 0){
      return <div className="flex flex-col">
      <h2>Không tìm thấy dữ liệu</h2>
      <Link className="bg-green-500 text-white px-4 py-2 rounded inline-block text-center" href={cpath}> Quay lại</Link>
      </div>
    }
    const prev = new URLSearchParams();
    const next = new URLSearchParams();

    if (+page >=0){
      next.append('page',""+(+page+1))
    }
    if (+page-1 >1){
      prev.append('page',""+(+page-1))
    }
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center py-4">Võ Huân Shop</h1>
      <div className="py-8">
        <Table>
          <TableCaption><ul className="flex justify-center items-center -space-x-px text-center">
          <li>
            <Link passHref  href={`${cpath}${prev.toString()? `?${prev.toString()}` : ``}`} className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Previous</span>
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
            </Link>
          </li>
          <li>
            <Link passHref  href={`${cpath}${next.toString()? `?${next.toString()}` : ``}`} className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Next</span>
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
            </Link>
          </li>
        </ul></TableCaption>
          <TableHeader>
            <TableRow className="text-sm md:text-md">
              <TableHead>Lệnh mua</TableHead>
              <TableHead >Tên</TableHead>
              <TableHead className="">Giá</TableHead>
              <TableHead className="hidden md:table-cell w-1/2">Mô tả</TableHead>
              <TableHead className="hidden md:table-cell">Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
           
              {data?.map((item:any,index:number)=> (
                 <TableRow key={index} className="text-sm md:text-md">
                    <TableCell>!shopvohuan {item.ID}</TableCell>
                    <TableCell className="text-blue-500 hover:text-blue-600 relative"><Image className="absolute left-0" alt={item.FLD_NAME} width={24} height={24} src={`https://chamthoi.com/images/hkpro/ITEM_V20/${item.FLD_PID}.jpg`}/> <span className="pl-4">{item?.FLD_NAME}</span></TableCell>
                    <TableCell className={`py-1 `}>{item.FLD_PRICE}@</TableCell>
                    <TableCell className="hidden md:table-cell">{item.FLD_DESC}</TableCell>
                    <TableCell className="hidden md:table-cell">{item.FLD_DAYS}</TableCell>
                 </TableRow>
                
              ))}
              
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default VoHuanShop