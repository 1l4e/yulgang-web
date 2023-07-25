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

const DownloadPage = (props) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center py-4">Tải game</h1>
      <Table>
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow className="text-sm md:text-md">
              <TableHead>Bản cài</TableHead>
              <TableHead>Link</TableHead>
              <TableHead className="hidden md:table-cell">Dung lượng</TableHead>

            </TableRow>
          </TableHeader>
          <TableBody>
           
          <TableRow className="text-sm md:text-md">
                    <TableCell>GDrive</TableCell>
                    <TableCell className="text-blue-500 hover:text-blue-600 "><a href="#">Drive google</a></TableCell>
                    <TableCell className="text-blue-500 hover:text-blue-600 hidden md:table-cell ">2.0 Gb</TableCell>
          </TableRow>
          <TableRow className="text-sm md:text-md">
                    <TableCell>Fshare</TableCell>
                    <TableCell className="text-blue-500 hover:text-blue-600 "><a href="#">Fshare.vn</a></TableCell>
                    <TableCell className="text-blue-500 hover:text-blue-600 hidden md:table-cell ">2.0 Gb</TableCell>
          </TableRow>
              
          </TableBody>
        </Table>
        <ul>
          <li>Vui lòng tắt trình diệt virus khi cài</li>
          <li>Sau khi tải về thành công, tiến hành giải nén và sử dụng launcher để đăng nhập vào game</li>
        </ul>
    </div>
  )
}

export default DownloadPage