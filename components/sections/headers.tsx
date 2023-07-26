"use client";
import React, { useState } from "react";
import Link from "next/link";
import {   CalendarCheck, CalendarDays,  Castle,  ChevronDown, CircleDollarSign, Coins,  DownloadCloud, Fan, Gem, Home, ListOrdered, LucideIcon, Newspaper, PocketKnife, Sparkle, Swords, VenetianMask } from "lucide-react";
import logo from '@/public/logo.png'
import Image from "next/image";
import { LoginButton,LogoutButton } from "../auth/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";
import MobileMenu from "./mobileMenu";

const menus = [
  { id: 1,title: "Trang chủ", slug: "/",icon: Home},
  { id:2, title: "Tin tức",slug: 'tin-tuc',icon: Newspaper ,/* child:[
    {id: 11,title: "Khuyến mãi", slug: 'khuyen-mai',icon: BadgePercent},
    {id: 12,title: "Hoạt động", slug: 'hoat-dong', icon:CandyCane},
    {id: 13,title: "Cập nhật", slug: 'cap-nhat',icon: CheckCircle}
  ] */},
  { id: 3, title: "Xếp hạng", slug: 'xep-hang',icon: ListOrdered, child: [
    { id: 13, title: "Cấp độ", slug: 'xep-hang',icon: ListOrdered},
    {id: 14,title: "Thế lực", slug: 'rank-tlc',icon : Swords},
    {id: 15,title: "Tài phú", slug: 'rank-taiphu', icon: CircleDollarSign},
    {id: 16,title: "Võ huân", slug: 'rank-vohuan', icon: Sparkle},
    {id: 17,title: "Bang hội", slug: 'rank-guild', icon: Castle},
   /*  {id: 18,title: "Cống hiến", slug: 'rank-conghien',icon: BarChart2Icon}, */
    {id: 19,title: "Event",slug: 'rank-event', icon: Fan},
    {id: 110,title: "VIP", slug: "rank-vip", icon:VenetianMask}
  ] },
  {id:5, title: "Cửa hàng", slug: "cash-shop",icon: Coins,child: [
    {id:111, title: "Cash ", slug: "cash-shop",icon: Coins},
    {id: 112,title: "Boss ", slug: 'boss-shop', icon: PocketKnife},
    {id: 113,title: "Event ", slug: 'event-shop', icon: CalendarCheck},
    {id: 114,title: "Chợ ", slug: 'market', icon: CalendarDays},
    {id: 115,title: "Võ huân ", slug: 'vohuan-shop', icon: Sparkle},
    {id: 116,title: "Võ hoàng", slug: 'vohoang-shop', icon: Gem}
  ]},
  {id: 4, title: "Tải game", slug: "download",icon: DownloadCloud},
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [isMenu,setIsMenu] = useState(false);
  const { data: session, status } = useSession()

    const handleMenu = () => {
    setIsMenu(!isMenu);
  };
  const handleHover = (id:string)=>{
    setIsOpen(id)
  }
  const handleLeave =() =>{
    setIsOpen(null)
  }



  return (
    <header className="fixed top-0  left-0 w-full z-50">
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
  
          </div>
          <NavigationMenu className={` hidden md:flex`}>
            <NavigationMenuList>
              {menus.map((menu:any,index:number)=> { 
                const Icon = menu.icon
                return (
                      <NavigationMenuItem key={index}>
                      
                      {menu.child === undefined ? (
                      <Link href={`/${menu.slug}`} legacyBehavior passHref>
                      <NavigationMenuLink>
                          <Icon size={16} className="inline-block mr-2" />
                        {menu.title}
                      </NavigationMenuLink>
                    </Link>
                      ): <>
                      <NavigationMenuTrigger> <Icon size={16} className="inline-block mr-2" />{menu.title}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[400px] bg-white">
                          {menu.child?.map((component:any) => {
                            return(
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.slug}
                              icon={component.icon}
                            >
                            </ListItem>
                          )})}
                        </ul>
                      </NavigationMenuContent>
                      </>}
                    
                    </NavigationMenuItem>
                  )})}
            </NavigationMenuList>
          </NavigationMenu>

          <MobileMenu menus={menus} />
         
        </div>
      </nav>
    </header>
  );
};

export default Header;


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  {
    className?: string;
    title: string;
    href: string;
    children?: React.ReactNode;
    icon?: LucideIcon;
  }
>(({ className, title, children, ...props }, ref) => {
  const Icon = props.icon
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md px-2 py-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{<Icon size={16} className="inline-block mr-2" />}{title}</div>
          {children && <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>}
          
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"