import { findManyGuildMember } from "@/models/rank.server"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import Link from 'next/link'
import {ChucVuBang} from '@/lib/utils/constant'

const GuildInfo = async ({params,searchParams}) => {
    const {slug,child} = params
    let { page } = searchParams;
  if (!page || +page < 0) page = 0;
  if (Number.isNaN(+page)) page = 0;
    const guildName = Buffer.from(child,"hex").toString()
    const data = await findManyGuildMember(guildName,50,page);
    if (!data || data.length === 0) {
        return (
          <>
            <h2>Không tìm thấy Thông tin Guild</h2>
            <Link className="bg-green-500 px-4 py-2 rounded inline-block" href="/">
              {" "}
              Quay lại
            </Link>
          </>
        );
      }
  return (
    <div className="container mx-auto">
    <h1 className="text-3xl text-center py-4">{guildName}</h1>
    <div className="py-8">
      <Table>
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow className="text-sm md:text-md">
            <TableHead>STT</TableHead>
            <TableHead>Tên</TableHead>
            <TableHead className="hidden md:table-cell">Chức vụ</TableHead>
            <TableHead className="">Cống hiến</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
         
            {data?.map((item:any,index:number)=> {
                const cv = ChucVuBang.find(e=> e.id===+item.Leve)
               
                return(
               <TableRow key={index} className="text-sm md:text-md">
                  <TableCell>{index+1}</TableCell>
                  <TableCell className="text-blue-500 hover:text-blue-600 "><Link href={`/character/${encodeURIComponent(Buffer.from(item.FLD_NAME,'utf-8').toString('hex').toUpperCase())}`}>{item?.FLD_NAME}</Link></TableCell>
                  <TableCell className={`${cv?.color} hidden md:table-cell `}>{cv?.text}</TableCell>
                  <TableCell className="">{item.FLD_Donate}</TableCell>
               </TableRow>
              
            )})}
            
        </TableBody>
      </Table>
    </div>
  </div>
  )
}

export default GuildInfo