"use client"
import {useState} from 'react'
import { charList, characterLists } from "@/lib/utils/constant";
import Image from 'next/image'
import enConvert from '@/lib/utils/charW';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import bg from '@/public/ani/bg.png'
import ani from '@/public/ani/circle-animation.png'
interface Character {
    id:number,
    title: string,
    image:string,
    description:string,
    char:string,
}

const KhiCongComponents = ({data,tt}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalIndex, setModelIndex] = useState<any>({});
    const [max,setMax]= useState(60)
    const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
    let timeoutId:any;
    const image_url = process.env.PUBLIC_IMAGE_ENDPOINT || 'http://chamthoi.com/images';
    const imagePath = `${image_url}/hkpro`
    async function handleClick(
        e: any,
        itemdata: any,
      ) {
        //console.log({x:e.clientX,xw:window.innerWidth})
        let x =e.pageX-window.scrollX -100
        let y = e.pageY-window.scrollY+30 
        if (window.innerWidth <=450){
            x= (window.innerWidth-320)/2;
        }
         console.log(x,y)
        timeoutId = setTimeout(async() => {
            
            setModalOpen(true)
            setModalPosition({ x: x , y: y })
            setModelIndex((prev:any)=>(itemdata))
        }, 200)
       if (itemdata.itemId==='0'){
        return
       }
  
      }
  
      function onMouseLeave(){
        clearTimeout(timeoutId); 
      }
      const handleModalClose = () => {
        setModalOpen(false);
      };
      const modalStyle:any = {
          position: "fixed",
          left: `${modalPosition.x}px`,
          top: `${modalPosition.y}px`,
          width: "320px",
          height: "auto",
          backgroundColor: "#000000a5",
          border: "2px solid white",
          display: modalOpen ? "block" : "none",
          'zIndex': "1000",
        };
        return (
            <div >
                 <div className="flex justify-center">
                 <label >Max Khí công </label><input className='dark:text-white dark:bg-slate-800 w-10 text-center' name="max" value={max} onChange={(e)=>setMax(+e.target.value)}></input>
            
                 </div>
                 <div className="">
        <h2 className="text-center text-2xl">Giới thiệu nhân vật</h2>
      <Tabs defaultValue="1" className="max-w-4xl mx-auto h-full min-h-[50vh]  md:min-h-[750px] overflow-hidden text-center">
        <TabsList>
            {characterLists.map((item:Character,index:number)=> {
                return (
                    <TabsTrigger onClick={()=>setModalOpen(false)} key={index} value={item.id+""}><Image title={item.title} alt={item.title} src={item.image} width={32} height={32}></Image></TabsTrigger>
                )
            })}
        </TabsList>
        {characterLists.map((item:Character,index:number)=> (
            <TabsContent value={item.id+""} key={index}>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">

                <div className="">
                {/* <Image width={318} height={480} title={item.title} alt={item.title}  src={item.description}></Image>
                 */}<div className="mx-4 border my-4 px-2 py-4" key={item.id}>
                            <h1 className="text-center text-2xl">{item.title}</h1>
                          
                            <div  className="inline-flex items-center justify-center rounded-md p-1 text-muted-foreground flex-wrap">
                            {data.map((i:any,index:number)=>{
                                if (+i.FLD_JOB === +item.id){
                                    return (
                                        <div key={index} className='m-2'>
                                            <Image width={32} height={32} className="max-w-none" alt={item.title} onClick={(e)=>handleClick(e,i)} onMouseLeave={onMouseLeave} onMouseEnter={(e)=>handleClick(e,i)} src={`${imagePath}/SKILL/${i.FLD_PID}.jpg`}></Image>
                                        </div>
                                    )
                                }
                                
                            })}
                            </div>
                            <div className="inline-flex items-center justify-center rounded-md p-1 text-muted-foreground flex-wrap">
                            {tt.map((i:any,index:number)=>{
                                if (+i.FLD_JOB === +item.id || +i.FLD_JOB===0){
                                    return (
                                        <div key={index} className='m-2'>
                                            <Image width={32} height={32} className="max-w-none" alt={item.title} onClick={(e)=>handleClick(e,i)} onMouseLeave={onMouseLeave} onMouseEnter={(e)=>handleClick(e,i)} src={`${imagePath}/SKILL/${i.FLD_PID}.jpg`}></Image>
                                        </div>
                                    )
                                }
                                
                            })}
                            </div>
                        </div>
                </div>
                <div className=" relative">
                <Image width={600} height={600} className="absolute top-0"  title={item.title} alt={item.title}  src={bg.src}></Image>
                <Image width={600} height={600}  className="absolute top-0 animate-spin-slow" title={item.title} alt={item.title}  src={ani.src}></Image>
                <Image width={600} height={600} className="relative" title={item.title} alt={item.title}  src={item.char}></Image>
                
                </div>
               
                </div>
               
            </TabsContent>
        ))}
      </Tabs>
      <div
                        style={modalStyle}
                        onClick={handleModalClose}
                    >
                        {modalIndex&& (
                            <>
                            <p className="text-center text-blue-500"> {modalIndex?.FLD_PID}</p>
                            <p className="text-center text-blue-500">{modalIndex.FLD_NAME&&enConvert(modalIndex.FLD_NAME)}</p>
                            <p className="text-center text-white">{modalIndex.FLD_DES&&enConvert(modalIndex.FLD_DES)}</p>
                            {modalIndex?.FLD_ChiSo1 &&<span className="block text-center text-green-500">{modalIndex.FLD_Bonus1 !='0.0'&& `Gốc ${+modalIndex.FLD_Bonus1} - `} {+modalIndex.FLD_ChiSo1!=0 && `Tăng ${+modalIndex.FLD_ChiSo1} mỗi cấp - MAX: ${Math.floor(+max*(+modalIndex.FLD_ChiSo1)+(+modalIndex.FLD_Bonus1))}`} <p className="text-white">{modalIndex.FLD_ChuThich2&&enConvert(modalIndex.FLD_ChuThich1)}</p></span>}
                            {modalIndex?.FLD_ChiSo2 &&<span className="block text-center text-green-500">{modalIndex.FLD_Bonus2 !='0.0'&& `Gốc ${+modalIndex.FLD_Bonus2} - `} {+modalIndex.FLD_ChiSo2!=0 && `Tăng ${+modalIndex.FLD_ChiSo2} mỗi cấp - MAX: ${Math.floor(+max*(+modalIndex.FLD_ChiSo2)+(+modalIndex.FLD_Bonus2))}`} <p className="text-white">{modalIndex.FLD_ChuThich2&&enConvert(modalIndex.FLD_ChuThich2)}</p></span>}
                            {modalIndex?.FLD_Hieuqua1 &&<span className="block text-center text-green-500">{modalIndex.FLD_Hieuqua1 !='0.0'&& `Tăng ${+modalIndex.FLD_Hieuqua1} `} <p className="text-white">{modalIndex.FLD_ChuThich3&&enConvert(modalIndex.FLD_ChuThich3)}</p></span>}
                            {modalIndex?.FLD_Hieuqua2 &&<span className="block text-center text-green-500">{modalIndex.FLD_Hieuqua2 !='0.0'&& `Tăng ${+modalIndex.FLD_Hieuqua2} `} <p className="text-white">{modalIndex.FLD_ChuThich4&&enConvert(modalIndex.FLD_ChuThich4)}</p></span>}
                            
                            </>
                             )}
                         </div>
    </div>
            </div>
           
          )

    
 
}

export default KhiCongComponents