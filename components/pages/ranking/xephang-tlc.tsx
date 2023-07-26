import { charList } from '@/lib/utils/constant';
import { fact, num } from '@/lib/utils/reader';
import { findManyRankTLC } from '@/models/rank.server';
import Link from 'next/link';
import React from 'react'
import NotFound from "@/app/not-found";

function countItemsByMonphai(object:any,id:string) {
  const counts = {};
  for (const item of object) {
    const monphaiValue = item[id];
    if (!counts[monphaiValue]) {
      counts[monphaiValue] = 1;
    } else {
      counts[monphaiValue]++;
    }
  }
  return counts;
}


const RankTLC = async ({params,searchParams}) => {
  let {page} = searchParams;
  if (!page || +page <0) page =0;
  if (Number.isNaN(+page)) page = 0
  const data = await findManyRankTLC(50,+page)
  if (data.length<50){
    page=page-1
  }
  const tl = countItemsByMonphai(data,'TheLuc')
  const cpath = `/${params.slug}`
  if (data.length === 0){
    return <NotFound />
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
        <h1 className="text-3xl text-center py-4">Bảng Xếp Hạng Thế lực chiến</h1>
         {/*  <span className='block text-center'>Chính : {tl["Chinh"]} | Tà : {tl["Ta"]}</span>
           */}<div className="py-8">
            <table className=" rounded-t-lg w-full mx-auto bg-slate-600 text-white font-hk text-base overflow-hidden text-center not-prose">
              <thead className="rounded-xl">
                <tr>
                  <th className="px-2">Hạng</th>
                  <th>Nhân vật</th>
                 {/*  <td>Account</td> */}
                  <th className="hidden md:table-cell">Cấp độ</th>
                  <th className="hidden md:table-cell">Thế lực</th>
                  <th className="hidden md:table-cell">Guild</th>
                  <th><span>Giết</span>/<span>chết</span></th>
                  <th className="hidden md:table-cell">NPC</th>
                  <th className="hidden md:table-cell">Tổng</th>
                </tr>
              </thead>
              <tbody>
                
                  {data&& data.map((item:any,index:number) => {
                    const fac = fact(item.TheLuc);
                    return (
                      <tr className={ (index%2==0)? `bg-cyan-50 dark:bg-slate-800 border border-dotted border-blue-500` : ` bg-cyan-100 dark:bg-slate-900 border border-dotted border-blue-500`} key={item.TenNhanVat}>
                          <td className=" py-1 text-black dark:text-white  underline">{(50*(+page))+index+1}</td>
                          <td className={`${item?.TheLuc==="Chinh" ? "text-blue-500" : item?.TheLuc==="Ta" ? "text-red-500" : "text-black dark:text-white"}  py-1  hover:text-blue-700 cursor-pointer`}><Link href={`/character/${encodeURIComponent(Buffer.from(item.TenNhanVat,'utf-8').toString('hex').toUpperCase())}`}>{item.TenNhanVat}</Link></td>
                          {/* <td className=" text-green-500 hover:text-blue-700 cursor-pointer"><Link href={`/xep-hang/${item.FLD_ID}`}>{item.FLD_ID}</Link></td> */}
                         
                          <td className={`${item?.TheLuc==="Chinh" ? "text-blue-500" : item?.TheLuc==="Ta" ? "text-red-500" : "text-black dark:text-white"} py-1  hidden md:table-cell `}>{item?.DangCap}</td>
                          <td className={`${item?.TheLuc==="Chinh" ? "text-blue-500" : item?.TheLuc==="Ta" ? "text-red-500" : "text-black dark:text-white"} py-1  hidden md:table-cell `}>{item?.TheLuc==="Chinh" ? "Chính" : item.TheLuc==="Ta" ? "Tà" : ""}</td>
                          <td className={`${item?.TheLuc==="Chinh" ? "text-blue-500" : item?.TheLuc==="Ta" ? "text-red-500" : "text-black dark:text-white"} py-1  hidden md:table-cell `}>{item?.BangPhai}</td>
                          <td className="text-slate-900"><span className=" py-1  text-blue-600">{item.GietNguoiSoLuong}</span>/<span className="text-red-600">{item.TuVongSoLuong}</span></td>
                          <td className="  py-1 text-black dark:text-white hidden md:table-cell text-right px-2 md:px-4">{item.NpcDiemSo}</td>
                          <td className="  py-1 text-black dark:text-white hidden md:table-cell text-right px-2 md:px-4">{item.TotalDiemSo}</td>
                      </tr>
                    )
                  })}
                
              </tbody>
            </table>
            <nav aria-label="Page navigation example">
        <ul className="flex justify-center items-center -space-x-px text-center">
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
        </ul>
      </nav>
          </div>
        </div>
  )
}

export default RankTLC