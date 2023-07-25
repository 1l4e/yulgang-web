import { findManyMoney } from '@/models/rank.server';
import Link from 'next/link';
import { charList } from "@/lib/utils/constant";
import Image from 'next/image';

const RankTaiPhu = async ({params,searchParams}) => {
    let {page} = searchParams;
    if (!page || +page <0) page =0;
    /* if (Number.isNaN(+page)) page = 0 */
    const data = await findManyMoney(50,+page)
    const cpath = `/${params.slug}`
    if (!data ||data.length === 0){
      return <>
      <h2>Không tìm thấy bảng xếp hạng</h2>
      <Link className="bg-green-500 px-4 py-2 rounded inline-block" href="/"> Quay lại</Link>
      </>
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
          <h1 className="text-3xl text-center py-4">Bảng Xếp Hạng Tài phú</h1>
            <div className="py-8">
              <table className=" rounded-t-lg w-full mx-auto bg-slate-600 text-white font-hk text-base overflow-hidden text-center not-prose">
                <thead className="rounded-xl">
                  <tr>
                    <th className="px-2">Hạng</th>
                    <th>Nhân vật</th>
                   {/*  <td>Account</td> */}
                   <th className="hidden md:table-cell">Nghề</th>
                    <th className=" text-right">Túi</th>
                    <th className="hidden md:table-cell text-right">Kho Riêng</th>
                    <th className="hidden md:table-cell text-right">Kho Chung</th>
                  </tr>
                </thead>
                <tbody>
                  
                    {data&& data.map((item:any,index:number) => {
                      return (
                        <tr className={ (index%2==0)? `bg-cyan-50 dark:bg-slate-800 border border-dotted border-blue-500` : ` bg-cyan-100 dark:bg-slate-900 border border-dotted border-blue-500`} key={item.name}>
                            <td className=" py-1 text-black dark:text-white  underline">{(50*(+page))+index+1}</td>
                            <td className={` py-1 text-black  hover:text-blue-700 cursor-pointer relative`}> <Image className="absolute left-0" alt={item.FLD_NAME} width={24} height={24} src={charList[item.FLD_JOB].icon}/><Link href={`/character/${encodeURIComponent(Buffer.from(item.name,'utf-8').toString('hex').toUpperCase())}`}>{item.name}</Link></td>
                            <td className={`py-1  md:table-cell hidden  ${charList[item.FLD_JOB].color} text-center relative`}><span>{charList[item.FLD_JOB].text}</span></td>
                            <td className=" py-1 text-black dark:text-white text-right px-2 md:px-4">{(+item.money).toLocaleString()}</td>
                            <td className="  py-1 text-black dark:text-white hidden md:table-cell text-right px-2 md:px-4">{(+item.whmoney).toLocaleString()}</td>
                            <td className="  py-1 text-black dark:text-white hidden md:table-cell text-right px-2 md:px-4">{(+item.pbmoney).toLocaleString()}</td>
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

export default RankTaiPhu