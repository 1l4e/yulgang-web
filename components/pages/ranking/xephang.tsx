import { charList } from "@/lib/utils/constant";
import { fact, num } from "@/lib/utils/reader";
import { findManyCharacter } from "@/models/character.server"
import Image from "next/image";
import Link from "next/link";



const XepHangPage = async ({params,searchParams}) => {

  let {page,char} = searchParams;
  if (!page || +page <0) page =0;
  if (!char) char = "";
  let charId = num(char);
  if (Number.isNaN(+page)) page = 0
  if (Number.isNaN(charId)) charId = 0
  const data = await findManyCharacter(50,page,charId)
  const cpath = `/xep-hang`
  if (data.length === 0){
    return <>
    <h2>Không tìm thấy bảng xếp hạng</h2>
    <Link className="bg-green-500 px-4 py-2 rounded inline-block" href="/xep-hang"> Quay lại</Link>
    </>
  }
  const prev = new URLSearchParams();
  const next = new URLSearchParams();
  if (charId>0){
    prev.append('char',""+char)
    next.append('char',""+char)
  }
  if (+page >=0){
    next.append('page',""+(+page+1))
  }
  if (+page-1 >1){
    prev.append('page',""+(+page-1))
  }
  return (
    <div className="container mx-auto">
        <h1 className="text-3xl text-center py-4">Bảng Xếp Hạng Nhân Vật</h1>
        <div className="flex flex-wrap sm:flex-row justify-center font-hk">
            {charList.map((tab:any,i:number)=> (
                 <div 
                 id={i+1+""}
                 key={tab.id}
                 >
              <Link key={i} className={`${charId===i && tab.color} py-2 px-2 block text-sm hover:text-blue-500 focus:outline-none  border-b-2 font-medium border-blue-500 ' : ''}   `}  href={(tab.slug!='all') ? `/xep-hang?char=${tab.slug}` : `/xep-hang`}>
                {tab.text}
               </Link> 
               </div>
            ))}
        
        </div>
          <div className="py-8">
            <table className=" rounded-t-lg w-full mx-auto bg-transparent text-black font-hk text-base overflow-hidden text-center not-prose">
              <thead className="rounded-xl bg-slate-600 text-white">
                <tr>
                  <th className="px-2">Hạng</th>
                  <th>Nhân vật</th>
                 {/*  <td>Account</td> */}
                  <th className="hidden md:table-cell">Nghề</th>
                  <th><span>Cấp độ</span>/<span>TS</span></th>
                  <th className="hidden md:table-cell">Thế lực</th>
                  <th className="hidden md:table-cell">Võ huân</th>
                </tr>
              </thead>
              <tbody>
                
                  {data&& data.map((item:any,index:number) => {
                    const fac = fact(item.FLD_ZX);
                    return (
                      <tr className={ (index%2==0)? `bg-cyan-50/20 dark:bg-slate-800 border border-dotted border-blue-500` : ` bg-cyan-100/20 dark:bg-slate-900 border border-dotted border-blue-500`} key={item.FLD_NAME}>
                          <td className=" py-1 text-black dark:text-white  underline">{(50*(+page))+index+1}</td>
                          <td className={`${fac?.color} py-1  hover:text-blue-700 cursor-pointer relative`}><Image className="absolute left-0" alt={item.FLD_NAME} width={24} height={24} src={charList[item.FLD_JOB].icon}/><Link href={`/character/${encodeURIComponent(Buffer.from(item.FLD_NAME,'utf-8').toString('hex').toUpperCase())}`}>{item.FLD_NAME}</Link> </td>
                          {/* <td className=" text-green-500 hover:text-blue-700 cursor-pointer"><Link href={`/xep-hang/${item.FLD_ID}`}>{item.FLD_ID}</Link></td> */}
                          <td className={`py-1  md:table-cell hidden  ${charList[item.FLD_JOB].color} text-center `}><span>{charList[item.FLD_JOB].text}</span></td>
                          <td className="text-slate-900"><span className=" py-1  text-slate-600">{item.FLD_LEVEL}</span>/<span className="text-slate-800">{item.FLD_ZS}</span></td>
                          <td className={` y-1  hidden md:table-cell ${fac?.color}`}>{fac?.name}</td>
                          <td className="py-1 text-black dark:text-white hidden md:table-cell text-right px-2 md:px-4">{parseInt(item.FLD_WX).toLocaleString()}</td>
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

export default XepHangPage