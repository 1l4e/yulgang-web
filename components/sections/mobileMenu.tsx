"use client"
import { AnimatePresence, motion } from 'framer-motion'
import { AlignJustify, ArrowUpNarrowWide, DownloadCloud, Home, User2,Zap } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useState} from 'react'
import { LoginButton, LogoutButton } from '../auth/button'


const mobiles = [
    {id:1,title: "Menu", icon: AlignJustify},
    {id:2,title: "Ranking",icon: ArrowUpNarrowWide},
    {id:3,title: "Home", icon: Home},
    {id:4,title: "Account", icon: User2},
    {id:5,title: "Download", icon: DownloadCloud},
    {id:6,title: "Khí Công", slug: "khi-cong", icon: Zap},
]
const taikhoan = [
    {id:1,title: "Tài khoản", icon: User2,slug: "dashboard"},
    {id:2,title: "Nhân vật",icon: ArrowUpNarrowWide,slug: "#"},
    {id:3,title: "Nạp thẻ", icon: Home,slug: "nap-the"},
    {id:5,title: "Đăng xuất", icon: DownloadCloud,slug: "#"},
    {id:6,title: "Khí Công", slug: "khi-cong", icon: Zap},
]

const MobileMenu = ({menus}) => {
    const { data: session, status } = useSession()

    const [isOpen,setIsOpen] = useState(0)

    const toggleSubmenu = (id:number) =>{
        if(id === isOpen){
            setIsOpen(null)
            return
        }
        setIsOpen(id)
    }



  return (
    <>
     <div className="visible md:hidden fixed bottom-0 left-0 h-16 w-full bg-white/80 border-t">
      <ul className="flex justify-around ">
        {menus.map((item:any, index:number) => {
            const Icon = item.icon
            return(
          <li 
 
          key={index} className='relative'>
            {item.child ? 
            (
           
                <button className='' onClick={(e)=>toggleSubmenu(index)}>
                <span className='h-16 flex relative text-sm justify-center items-center flex-col w-full text-center font-light'>
                    <Icon size={18} />
              <span>{item.title}</span>
              </span>
              
            </button>
            )
            : 
            (
                <Link href={`/${item.slug}`} title={item.title}>
                <span className='h-16 flex relative text-sm justify-center items-center flex-col w-full text-center font-light'>
                    <Icon size={18} />
                  <span>{item.title}</span>
                  </span>
                </Link>
            )}

            {isOpen===index && (
              <AnimatePresence>
              {item.child && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="fixed bottom-16 left-0 w-full h-96 bg-white z-10 pt-2 border-t"
                >
                    
                    {status==="authenticated" ? 
                    (
                        <div className="h-34 flex justify-center items-center flex-col">
                          <LogoutButton />
                          <ul className="grid grid-cols-4  items-center justify-center rounded-md p-1 text-muted-foreground gap-1 w-full">
                            {taikhoan.map((subItem, subIndex) => {
                                const Icon = subItem.icon
                                return(
                            <motion.li   
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.5 },
                              }}
                               whileTap={{scale:0.97}} onClick={()=>setIsOpen(null)} key={subIndex} className='  px-2 py-2 min-w-[5rem]'>
                                <Link href={`/${subItem.slug}`} className="focus:outline-none text-sm flex relative justify-center items-center flex-col text-center font-light">
                                    <Icon size={18} />
                                <span>{subItem.title}</span>
                                </Link>
                            </motion.li>
                        )})}
                    </ul>
                        </div>
                    )
                   :  (
                   <div className='h-24 flex justify-center items-center'>
                    <LoginButton />
                   </div>)}
                   
                    
                
                <div className="h-34 flex justify-center items-center flex-col">
                <h2 className='text-2xl text-center py-2'>{item.title}</h2>
                <ul className="grid grid-cols-4  items-center justify-center rounded-md p-1 text-muted-foreground gap-1 w-full">
                    {item.child.map((subItem, subIndex) => {
                        const Icon = subItem.icon
                        return(
                      <motion.li 
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.5 },
                      }}
                      whileTap={{scale:0.97}} key={subIndex} onClick={()=>setIsOpen(null)}  className=' px-2 py-2 min-w-[4rem]'>
                        <Link href={`/${subItem.slug}`} className="focus:outline-none text-sm flex relative justify-center items-center flex-col text-center font-light">
                          <Icon size={18} />
                          <span >{subItem.title}</span>
                        </Link>
                      </motion.li>
                    )})}
                  </ul>
                </div>
                
                </motion.div>
              )}
            </AnimatePresence>
            )}
          </li>
        )})}
      </ul>
    </div>
       
    </>
  )
}

export default MobileMenu