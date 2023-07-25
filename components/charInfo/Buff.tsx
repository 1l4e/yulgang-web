"use client";

import enConvert from "@/lib/utils/charW";
import { useEffect, useState, useTransition } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const Buff = ({ rbuff, tbuff }) => {
  const [modal, setModal] = useState(undefined);
  const [isLoading,startTransition] = useTransition();
  const [buffLists, setBuffLists] = useState({});
  const [tbuffLists, setTBuffLists] = useState({});
  const imagePath = `https://chamthoi.com/images/hkpro/ITEM_V20/`;

  useEffect(()=> {
  },[modal,buffLists])

  async function handleBuff(e: any, buff: any, index: number) {
    let data = buffLists[index]
    if (!data){
        const res = await fetch(`/api/items?id=${buff.id}`)
        data = await res.json()
        data=data[0]
        setBuffLists(prev=> {
            return {...prev,[index]:data}
        })
    }
    let mo = {
        id: buff.id,
        title: data?.FLD_NAME,
        des: data?.FLD_DES,
        time: "Còn lại "+buff.time
    }
    setModal(prev=>mo)
  }
  async function handleTBuff(e: any, buff: any, index: number) {
    let data = tbuffLists[index]
    if (!data){
        const res = await fetch(`/api/items?id=${buff.id}`)
        data = await res.json()
        data=data[0]
        setTBuffLists(prev=> {
            return {...prev,[index]:data}
        })
    }
    let mo = {
        id: buff.id,
        title: data.FLD_NAME,
        des: data.FLD_DES,
        time: "Ngày hết hạn "+buff.ttime
    }
    setModal(prev=>mo)
  }
  return (
    <div className="col-span-1 flex gap-2">
      <div className="w-full">
        <h3 className="text-xl text-center">Các Buff hiện tại</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {rbuff?.map((buff: any, index: number) => (
            <motion.div
            whileTap={{scale: 0.97}}
              onClick={(e) => startTransition(()=>{ handleBuff(e, buff, index)})}
              key={index}
              className={`w-[32px] h-[32px] relative`}
            >
              <Image
                src={`${imagePath}${buff.id}.jpg`}
                width="32"
                height="32"
                alt="item"
                title={`Còn lại ${buff.time}`}
              />
            </motion.div>
          ))}
          {tbuff?.map((buff: any, index: number) => (
            <motion.div
            whileTap={{scale: 0.97}}
               onClick={(e) => handleTBuff(e,buff,index)}
              key={index}
              className={`w-[32px] h-[32px]`}
            >
              <Image
                src={`${imagePath}${buff.id}.jpg`}
                width="32"
                height="32"
                alt="item"
                title={`Ngày hết hạn ${buff.ttime}`}
              />
            </motion.div>
          ))}
        </div>

        {modal && (
            <div className="flex flex-wrap diagonal p-4 w-full justify-center mt-10">
                <span className="font-bold">{modal?.title && enConvert(modal.title)}</span>
                <span>{modal?.des&&enConvert(modal.des)}</span>
                <span> {modal.time}</span>
            </div>
        )}
      </div>
    </div>
  );
};

export default Buff;
