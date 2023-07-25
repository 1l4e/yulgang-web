import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cam, cam_button, cam_description, cung, cung_button, cung_description, daiphu, daiphu_button, daiphu_description, dao, dao_button, dao_description, dhl, dhl_button, dhl_description, dieuyen, dieuyen_button, dieuyen_description, hbq, hbq_button, hbq_description, kiem, kiem_button, kiem_description, ninja, ninja_button, ninja_description, quyen, quyen_button, quyen_description, thany, thany_button, thany_description, thuong, thuong_button, thuong_description, tuhao, tuhao_button, tuhao_description } from "@/lib/characterImages";
import bg from '@/public/ani/bg.png'
import plat from '@/public/ani/platform.png'
import circle from '@/public/ani/circle.png';
import ani from '@/public/ani/circle-animation.png'
import Image from "next/image";

interface Character {
    id:number,
    title: string,
    image:string,
    description:string,
    char:string,
}

const characterLists = [
    {id:1,title: "Thần Y",image:thany_button.src, description: thany_description.src,char:thany.src},
    {id: 2,title: "Tử hào",image:tuhao_button.src,description: tuhao_description.src,char:tuhao.src},
    {id: 3,title: "Diệu Yến",image:dieuyen_button.src,description: dieuyen_description.src,char:dieuyen.src},
    {id: 4,title: "Quyền sư",image:quyen_button.src,description: quyen_description.src,char:quyen.src},
    {id: 5,title: "Đàm Hoa Liên",image:dhl_button.src,description: dhl_description.src,char:dhl.src},
    {id: 6,title: "Hàn Bảo Quân",image:hbq_button.src,description: hbq_description.src,char:hbq.src},
    {id: 7,title: "Cung Thủ",image:cung_button.src,description: cung_description.src,char:cung.src},
    {id: 8,title: "Cầm sư",image:cam_button.src,description: cam_description.src,char:cam.src},
    {id: 9,title: "Thích khách",image:ninja_button.src,description: ninja_description.src,char:ninja.src},
    {id: 10,title: "Đại phu",image:daiphu_button.src,description: daiphu_description.src,char:daiphu.src},
    {id: 11,title: "Thương khách",image:thuong_button.src,description: thuong_description.src,char:thuong.src},
    {id: 12,title: "Kiếm khách",image:kiem_button.src,description: kiem_description.src,char:kiem.src},
    {id: 13,title: "Đao khách",image:dao_button.src,description: dao_description.src,char:dao.src},
]


const NhanVat = () => {
  return (
    <div className="">
        <h2 className="text-center text-2xl">Giới thiệu nhân vật</h2>
      <Tabs defaultValue="1" className="max-w-4xl mx-auto h-full min-h-[50vh]  md:min-h-[750px] overflow-hidden text-center">
        <TabsList>
            {characterLists.map((item:Character,index:number)=> {
                return (
                    <TabsTrigger key={index} value={item.id+""}><Image title={item.title} alt={item.title} src={item.image} width={32} height={32}></Image></TabsTrigger>
                )
            })}
        </TabsList>
        {characterLists.map((item:Character,index:number)=> (
            <TabsContent value={item.id+""} key={index}>
                <div className="flex flex-row justify-center items-center">
                <div className="w-1/3">
                <Image width={318} height={480} title={item.title} alt={item.title}  src={item.description}></Image>
                </div>
                <div className="w-2/3 relative">
                <Image width={600} height={600} className="absolute top-0"  title={item.title} alt={item.title}  src={bg.src}></Image>
                <Image width={600} height={600}  className="absolute top-0 animate-spin-slow" title={item.title} alt={item.title}  src={ani.src}></Image>
                <Image width={600} height={600} className="relative" title={item.title} alt={item.title}  src={item.char}></Image>
                
                </div>
               
                </div>
               
            </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default NhanVat;
