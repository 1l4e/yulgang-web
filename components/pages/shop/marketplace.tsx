import {  findManyMarketPlace } from "@/models/shop.server"
import Link from 'next/link'
import { itemType } from "@/lib/utils/options";
import {  num } from "@/lib/utils/reader";
import Tbody from '@/components/pages/client/itemModal'



const MarketPlace = async ({params,searchParams}) => {
  let {page,type} = searchParams;
  if (!page || +page <0) page =0;
  if (!type) type = "";
  let typeId = num(type);
  if (Number.isNaN(+page)) page = 0
  if (Number.isNaN(typeId)) typeId = 0
  const tt = itemType.find(i=>i.id===+type)
    const data = await findManyMarketPlace(50,page,typeId)
    const cpath = `/${params.slug}`
 
    const prev = new URLSearchParams();
    const next = new URLSearchParams();
    if (typeId>0){
      prev.append('type',""+type)
      next.append('type',""+type)
    }
    if (+page >=0){
      next.append('page',""+(+page+1))
    }
    if (+page-1 >1){
      prev.append('page',""+(+page-1))
    }
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center py-4">Chợ trời {tt&&` - ${tt.name}`}</h1>
      <div className="flex flex-wrap sm:flex-row justify-center font-hk gap-x-1">
            {itemType.map((tab:any,i:number)=> (
  
              <Link key={i} className={`${type===i && tab.color} py-2 px-2 block text-sm hover:text-blue-500 focus:outline-none font-medium ' : ''}   `}  href={(tab.name!='All') ? `/${params.slug}?type=${tab.id}` : `/${params.slug}`}>
                {tab.name}
               </Link> 
            ))}
        
        </div>
      <div className="py-8">
      <Tbody data={data} />
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
      </div>
    </div>
  )
}

export default MarketPlace