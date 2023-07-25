import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import {
    CircleDollarSign,
    EyeOff,
    Gift,
    Key,
    KeyRound,
    PersonStanding,
    Unplug,
    User2,
  } from "lucide-react";
  import { Button } from "@/components/ui/button"
import XepHangHome from "@/components/sections/xep-hang-home";
import Link from 'next/link';


  const notifications = [
    { id: 1, title: "Thông tin tài khoản", icon: User2 },
    { id: 2, title: "Đổi mật khẩu", icon: KeyRound },
    { id: 3, title: "Giải kẹt nhân vật", icon: PersonStanding },
    { id: 4, title: "Quản lý cash", icon: CircleDollarSign },
    { id: 5, title: "Ẩn thông tin nhân vật", icon: EyeOff },
    { id: 6, title: "Đăng xuất", icon: Unplug },
  ];
const HomeSideBar =  ({tops}) => {

  return (
    <>
    {/* Navigation Menu */}
    <div className='pb-4 mt-20'> 
    <div className='flex gap-4 justify-center'>
    <Button variant='outline'>
      <Key className="mr-2 h-4 w-4" />Đăng ký
    </Button >
    <Button variant='outline'>
      <Gift className="mr-2 h-4 w-4" /> Nạp thẻ
    </Button>
    </div>
   
    </div>
    <div className="pb-4">
      <Card>
        <CardHeader>
          <CardTitle>Tài khoản</CardTitle>
        </CardHeader>
        <CardContent>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              {<notification.icon />}

              <div className="space-y-1 pl-2">
                <a
                  href="#"
                  className="text-sm font-medium leading-none"
                >
                  {notification.title}
                </a>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>

    <div className="pb-4">
      <Card>
        <CardHeader>
          <CardTitle>Xếp hạng</CardTitle>
        </CardHeader>
        <CardContent>
          <XepHangHome  tops={tops}/>
        </CardContent>
      </Card>
    </div>
    {/* Table */}

    {/* Block */}
   {/*  <div>Block Content</div> */}
  </>
  )
}

export default HomeSideBar