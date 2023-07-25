"use client";
import React, { useState } from "react";
import Link from "next/link";
import {   CalendarCheck, CalendarDays,  Castle,  ChevronDown, CircleDollarSign, Coins,  DownloadCloud, Fan, Gem, ListOrdered, Newspaper, PocketKnife, Sparkle, Swords, VenetianMask, Zap } from "lucide-react";
import logo from '@/public/logo.png'
import Image from "next/image";
import { LoginButton,LogoutButton } from "../auth/button";

import { useSession } from "next-auth/react";

const menus = [
  { id: 1, title: "Tin tức",slug: 'tin-tuc',icon: Newspaper ,/* child:[
    {id: 11,title: "Khuyến mãi", slug: 'khuyen-mai',icon: BadgePercent},
    {id: 12,title: "Hoạt động", slug: 'hoat-dong', icon:CandyCane},
    {id: 13,title: "Cập nhật", slug: 'cap-nhat',icon: CheckCircle}
  ] */},
  { id: 2, title: "Xếp hạng", slug: 'xep-hang',icon: ListOrdered, child: [
    {id: 14,title: "Thế lực chiến", slug: 'rank-tlc',icon : Swords},
    {id: 15,title: "Tài phú", slug: 'rank-taiphu', icon: CircleDollarSign},
    {id: 16,title: "Võ huân", slug: 'rank-vohuan', icon: Sparkle},
    {id: 17,title: "Bang hội", slug: 'rank-guild', icon: Castle},
   /*  {id: 18,title: "Cống hiến", slug: 'rank-conghien',icon: BarChart2Icon}, */
    {id: 19,title: "Event",slug: 'rank-event', icon: Fan},
    {id: 110,title: "VIP", slug: "rank-vip", icon:VenetianMask}
  ] },
  {id: 3, title: "Download", slug: "download",icon: DownloadCloud},
  {id:4, title: "Cash shop", slug: "cash-shop",icon: Coins,child: [
    {id: 112,title: "Boss shop", slug: 'boss-shop', icon: PocketKnife},
    {id: 113,title: "Event Shop", slug: 'event-shop', icon: CalendarCheck},
    {id: 114,title: "Chợ online", slug: 'market', icon: CalendarDays},
    {id: 115,title: "Võ huân Shop", slug: 'vohuan-shop', icon: Sparkle},
    {id: 116,title: "Võ hoàng Shop", slug: 'vohoang-shop', icon: Gem}
  ]},
  {id:5,title: "Khí Công", slug: "khi-cong", icon: Zap}
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(null);
  const { data: session, status } = useSession()
  const handleHover = (id:string) => {
    setIsOpen(id);
  };

  const handleLeave = () => {
    setIsOpen(null);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-white/50 border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-2">
          <Link href="/" className="flex items-center">
            <Image
              width={116}
              height={56}
              src={logo.src}
              className="h-14 mr-3"
              alt="Yulgang Logo"
            />
  
          </Link>
         
          <div className="flex items-center md:order-2">
            {status==="authenticated" ? <LogoutButton /> :  <LoginButton />}
           
           {/*  <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Đăng nhập
            </a> */}
            <button
              data-collapse-toggle="mega-menu-icons"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mega-menu-icons"
              aria-expanded="false"
            >
              <span className="sr-only">Mở menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            id="mega-menu-icons"
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          >
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
            {menus.map((item:any,index:number)=> {

                const Icon = item.icon
                 return (
                  
                <li key={item.title}>
                <Link
                  href={`/${item.slug}`}
                  key={item.id}
                  id="mega-menu-icons-dropdown-button"
                  onMouseEnter={(e)=>handleHover(item.id)}
                  onMouseLeave={handleLeave}
                  data-dropdown-toggle="mega-menu-icons-dropdown"
                  className="flex items-center justify-between  py-2 pl-3 pr-4 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <Icon size={20} />
                  <span className="pl-2">{item.title}</span>
                  {item.child && (<ChevronDown size={18}/>)}
                </Link>
                {(isOpen === item.id &&item.child) && (
                  <div
                  id="mega-menu-icons-dropdown"
                  onMouseEnter={(e)=>handleHover(item.id)}
                  onMouseLeave={handleLeave}
                  className={`absolute z-10 ${
                    isOpen===item.id ? "grid" : "hidden"
                  }  w-auto grid-cols-1 text-sm bg-white px-2 border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-1 dark:bg-gray-700`}
                >
                  <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                    <ul
                      className="space-y-4"
                      aria-labelledby="mega-menu-icons-dropdown-button"
                    >
                      {item.child.map((item:any,index:number)=> {
                        const Icon = item.icon
                        return(
                        <li key={item.title}>
                        <Link
                          href={`/${item.slug}`}
                          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                        >
                          <span className="sr-only">{item.title}</span>
                          <Icon size={20} />
                          <span className="pl-2 ">{item.title}</span>
                        
                        </Link>
                      </li>
                      )})}
                    </ul>
                  </div>
                </div>
                )
              }
              </li>
                 
                 )
              
             })}
            
              
             
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
