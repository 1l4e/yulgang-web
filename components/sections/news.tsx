"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'
interface News {
    id: number,
    category: number,
    title: string,
    description:string,
    date: string,
    image: string,
}

const news = [
    {id:1,category: 1,title: "Thời Trang Cập Nhật [Tùng Lâm Xạ Tiễn]",date: "26/06/2023",description : "Yulgang Hiệp Khách cập nhật Thời Trang mới Tùng Lâm Xạ Tiễn !!",image: "https://picture.dzogame.vn/Img/cms11980208692855232916.jpg"},
    {id:2,category: 2,title: "(Ưu Đãi) Tử Hà Thần Đan (20/07)",date: "20/07/2023",description : "Yulgang Hiệp Khách mang đến ưu đãi đặc biệt cho các Hiệp Khách đây.",image: "https://picture.dzogame.vn/Img/cms8978468961348817416.jpg"},
    {id:3,category: 2,title: "[DzoShop] Cập Nhật (20/07/2023)",date: "19/06/2023",description : "Đến hẹn lại lên, Dzoshop cập nhật với nhiều đạo cụ hấp dẫn",image: "https://picture.dzogame.vn/Img/cms8893786895003141618.jpg"},
    {id:4,category: 1,title: "[Mở bán] Hộp Quà Danh Dự (07.2023)",date: "16/06/2023",description : "Yulgang Hiệp Khách ra mắt Ấn phẩm giới hạn - Combo lịch mừng năm Quý Mão 2023 với nhiều ưu đãi hấp dẫn!!!",image: "https://picture.dzogame.vn/Img/cms4237226475944397320.jpg"},
    {id:5,category: 3,title: "[Sự Kiện] Bùa Chú Cho Linh Hồn Ác Ma (07.2023)",date: "06/06/2023",description : "Quà tặng đặc biệt dành cho các huynh tỷ khi mua sắm thỏa điều kiện yêu cầu!",image: "https://picture.dzogame.vn/Img/cms2541929540812836620.jpg"},
    {id:6,category: 3,title: "[Ấn Phẩm Giới Hạn] Combo Lịch Mừng Năm Mới 2023 (25/11)",date: "06/06/2023",description : "Mua sắm để nhận những phần quà hấp dẫn cùng Yulgang Hiệp Khách!!!",image: "https://picture.dzogame.vn/Img/cms5317780958257876125.jpg"},
    {id:7,category: 4,title: "Quà Tặng Bonus (19/07)",date: "02/06/2023",description : "Quà tặng cuối tuần dành cho các huynh tỷ khi mua sắm thỏa điều kiện yêu cầu!",image: "https://picture.dzogame.vn/Img/cms3934726095408190476.jpg"},
    {id:8,category: 1,title: "(Ưu Đãi) Chiêu Tài Trư (19/07)",date: "02/06/2023",description : "Yulgang Hiệp Khách cập nhật Thời Trang mới Tùng Lâm Xạ Tiễn !!",image: "https://picture.dzogame.vn/Img/cms20527803626822363334.jpg"},

]




const News = () => {
  return (
    <div className='flex flex-col prose md:prose-md lg:prose-lg'>
        <Tabs defaultValue="news" className="w-full">
        <TabsList>
            <TabsTrigger value="news">Tin tức</TabsTrigger>
            <TabsTrigger value="huong-dan">Hướng dẫn</TabsTrigger>
            <TabsTrigger value="su-kien">Sự kiện</TabsTrigger>
            <TabsTrigger value="khuyen-mai">Khuyến mãi</TabsTrigger>
        </TabsList>
        <TabsContent value="news">{news.map((item:News,index:number)=> {
            return (
                <div className='flex flex-row border-b gap-2' key={index}>
                    <div className='pb-2 min-w-[190px]'><Image alt={item.title} src={item.image} width={190} height={140} /></div>
                    <div className='pl-2 relative'>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <span className='absolute right-0 top-0'>{item.date}</span>
                    </div>
                </div>
            )
        })}</TabsContent>
        <TabsContent value="huong-dan">{news.map((item:News,index:number)=> {
            if(item.category!== 1) return null
            return (
                <div className='flex flex-row border-b gap-2' key={index}>
                    <div className='pb-2 min-w-[190px]'><Image  alt={item.title} src={item.image} width={190} height={140} /></div>
                    <div className='pl-2 relative'>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <span className='absolute right-0 top-0'>{item.date}</span>
                    </div>
                </div>
            )
        })}</TabsContent>
        <TabsContent value="su-kien">{news.map((item:News,index:number)=> {
            if(item.category!== 2) return null
            return (
                <div className='flex flex-row border-b gap-2' key={index}>
                    <div className='pb-2 min-w-[190px]'><Image alt={item.title} src={item.image} width={190} height={140} /></div>
                    <div className='pl-2 relative'>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <span className='absolute right-0 top-0'>{item.date}</span>
                    </div>
                </div>
            )
        })}</TabsContent>
        <TabsContent value="khuyen-mai">{news.map((item:News,index:number)=> {
            if(item.category!== 3) return null
            return (
                <div className='flex flex-row border-b gap-2' key={index}>
                    <div className='pb-2 min-w-[190px]'><Image alt={item.title} src={item.image} width={190} height={140} /></div>
                    <div className='pl-2 relative'>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <span className='absolute right-0 top-0'>{item.date}</span>
                    </div>
                </div>
            )
        })}</TabsContent>
        </Tabs>
        
    </div>
  )
}

export default News