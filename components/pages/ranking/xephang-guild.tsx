import { findManyGuildJoin } from "@/models/rank.server";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const RankGuild = async ({ params, searchParams }) => {
  let { page } = searchParams;
  if (!page || +page < 0) page = 0;
  if (Number.isNaN(+page)) page = 0;
  const data = await findManyGuildJoin(50, page);
  const cpath = `/${params.slug}`;
  if (!data || data.length === 0) {
    return (
      <>
        <h2>Không tìm thấy Guild nào</h2>
        <Link className="bg-green-500 px-4 py-2 rounded inline-block" href="/">
          {" "}
          Quay lại
        </Link>
      </>
    );
  }
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center py-4">Bảng Xếp Hạng Guild</h1>
      <div className="py-8">
        <Table>
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow className="text-sm md:text-md">
              <TableHead>STT</TableHead>
              <TableHead>Guild</TableHead>
              <TableHead className="hidden md:table-cell">Môn chủ</TableHead>
              <TableHead>Cấp độ</TableHead>
              <TableHead className="hidden md:table-cell">Cống hiến</TableHead>
              <TableHead className="hidden md:table-cell">Thành viên</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
           
              {data?.map((item:any,index:number)=> (
                 <TableRow key={index} className="text-sm md:text-md">
                    <TableCell>{index+1}</TableCell>
                    <TableCell className="text-blue-500 hover:text-blue-600 "><Link href={`/rank-guild/${encodeURIComponent(Buffer.from(item.G_Name,'utf-8').toString('hex').toUpperCase())}`}>{item?.G_Name}</Link></TableCell>
                    <TableCell className="text-blue-500 hover:text-blue-600 hidden md:table-cell "><Link href={`/character/${encodeURIComponent(Buffer.from(item.G_Master,'utf-8').toString('hex').toUpperCase())}`}>{item?.G_Master}</Link></TableCell>
                    <TableCell>{item.Leve}</TableCell>
                    <TableCell className="hidden md:table-cell">{item.BangPhaiCongHien}</TableCell>
                    <TableCell className="hidden md:table-cell">{item.Member}</TableCell>
                 </TableRow>
                
              ))}
              
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RankGuild;
