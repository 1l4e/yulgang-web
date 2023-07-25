import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import bg from '@/public/ani/bg.png'
import ani from '@/public/ani/circle-animation.png'
import Image from "next/image";
import { characterLists } from "@/lib/utils/constant";

interface Character {
    id:number,
    title: string,
    image:string,
    description:string,
    char:string,
}




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
