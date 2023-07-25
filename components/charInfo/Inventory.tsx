"use client";
import BagImage from "@/public/images/window/window_inventory_bag.bmp";
import Bag2Image from "@/public/images/window/window_inventory_sub_bag.bmp";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import {
  cuongHoa,
  getOp,
  getOpDa,
  getTrungCap,
  stringToItemDec,
} from "@/lib/utils/reader";
import enConvert from "@/lib/utils/charW";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence,Variants } from "framer-motion";
import Image from "next/image";

export const orderBox = [
  { id: 0, order: "order-8 -mt-[7px] ml-[1px]" },
  { id: 1, order: "order-12 -mt-[18px] ml-[5px]" },
  { id: 2, order: "order-14 -mt-[18px] -ml-[3px]" },
  { id: 3, order: "order-1 mt-[6px] ml-[6px]" },
  { id: 4, order: "order-13 -mt-[18px] ml-[1px]" },
  { id: 5, order: "order-6 mt-[11px] ml-[1px]" },
  { id: 6, order: "order-3 ml-[1px]" },
  { id: 7, order: "order-2 ml-[5px]" },
  { id: 8, order: "order-4 -ml-[3px]" },
  { id: 9, order: "order-7 -mt-[7px] ml-[5px]" },
  { id: 10, order: "order-9 -ml-[3px] -mt-[7px]" },
  { id: 11, order: "order-11 mt-[10px] ml-[6px]" },
  { id: 12, order: "order-5 -ml-[5px] mt-[7px]" },
  { id: 13, order: "order-10 mt-[11px]" },
  { id: 14, order: "order-15 col-start-3 -mt-[28px] ml-[1px]" },
  { id: 15, order: "order-14 mt-[10px] -ml-[5px]" },
];

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

const Inventory = ({ wearList, bags }) => {
  const [modal, setModal] = useState(undefined);
  const [itemBags, setItemBags] = useState({});
  const [itemWears, setItemWears] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const imagePath = `https://chamthoi.com/images/hkpro/ITEM_V20/`;

  async function handleClick(e: any, type: string, items: any, index: number) {
   
    const res = stringToItemDec(items);
    if (res.series === "0") {
      return;
    }
    setIsLoading(true);
    const ch = cuongHoa(res.option);
    const tc = getTrungCap(parseInt(ch.type), +res.trungcap);
    const res2 = await fetch(`/api/items?id=${items.split(",")[2]}`);
    let data = await res2.json();
    const itemin = data[0];
    if (itemin.FLD_RESIDE2 === 16) {
      let aa = getOpDa(res.option);
      if (res.itemId === "800000013" && aa.id === 0) {
        const lastTwoDigits = res.itemId.slice(-2);
        const nextThreeDigits = res.itemId.slice(-5, -2);
        const res3: any = await fetch(`/api/stone?id=${nextThreeDigits}`);
        aa = {
          id: res3.QigongID,
          name: res3.FLD_NAME,
          value: +lastTwoDigits,
        };
      }
      //console.log({aa})
      ch.ch = 0;
      ch.stoneopt = 0;
      ch.ttch = 0;
      ch.ttid = 0;
      ch.ttname = "No Options";
      ch.type = "0";
      res.magic1 = aa;
    }
    if (itemin.FLD_RESIDE2 === 30) {
      const aa = {
        id: "",
      };
      res.magic1 = {
        id: 22000,
        name: enConvert(itemin.FLD_NAME),
        value: res.magic1.value + 1,
      };
    }
    setModal((prev) => ({
      ...res,
      ch,
      tc,
      itemin,
    }));
    setIsLoading(false);
  }

  return (
    <div className="col-span-2 flex gap-2 justify-center">
      <div
        className="w-[247px] h-[610px]"
        style={{
          backgroundImage: `url(${BagImage.src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-[267px]">
          <Tabs defaultValue="wear" className="relative">
            <TabsList className="h-[76px] w-[247px]">
              <TabsTrigger
                className="text-transparent absolute top-[53px] left-[18px]"
                value="wear"
              >
                Trang bị
              </TabsTrigger>
              <TabsTrigger
                className="text-transparent absolute top-[53px] right-[18px]"
                value="baochau"
              >
                Bảo châu
              </TabsTrigger>
            </TabsList>

            <TabsContent value="wear">
              <div className="grid grid-cols-5 w-[247px] pl-[25px] pr-[17px] gap-y-[5px]">
                {wearList
                  ? wearList.map((items: string, index: number) => {
                      const item = items.split(",");
                      let type = "wear";
                      if (index < orderBox.length) {
                        return (
                          <motion.span
                          whileTap={{ scale: 0.97 }}
                            onClick={(e) => handleClick(e, type, items, index)}
                            key={index}
                            className={`cursor-pointer ${
                              index <= orderBox.length
                                ? orderBox[index].order
                                : ""
                            }`}
                          >
                            <Image
                              src={`${imagePath}${item[2]}.jpg`}
                              width="32"
                              height="32"
                              alt="item"
                            />
                          </motion.span>
                        );
                      }
                    })
                  : ""}
              </div>
            </TabsContent>
            <TabsContent value="baochau">
              <div className="grid grid-cols-5 w-[247px] pl-[25px] pr-[17px] gap-y-[5px]">
                {wearList
                  ? wearList.map((items: string, index: number) => {
                      const item = items.split(",");
                      let type = "wear";
                      if (index >= 31 && index < 47) {
                        let i = index - 31;
                        return (
                          <motion.span
                          whileTap={{ scale: 0.97 }}
                            onClick={(e) => handleClick(e, type, items, index)}
                            key={index}
                            className={`cursor-pointer ${
                              index >= orderBox.length ? orderBox[i].order : ""
                            }`}
                          >
                            <Image
                              src={`${imagePath}${item[2]}.jpg`}
                              width="32"
                              height="32"
                              alt="item"
                            />
                          </motion.span>
                        );
                      }
                    })
                  : ""}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="grid grid-cols-6 w-[247px] pl-[24px] pr-[25px] gap-y-[3px]">
          {bags
            ? bags.map((items: string, index: number) => {
                const item = items.split(",");
                let type = "bag";
                if (index < 36) {
                  return (
                    <motion.span
                    whileTap={{ scale: 0.97 }}
                      onClick={(e) => handleClick(e, type, items, index)}
                      key={index}
                      className={`cursor-pointer relative`}
                    >
                      <Image
                        src={`${imagePath}${item[2]}.jpg`}
                        width="32"
                        height="32"
                        alt="item"
                      />
                      <span
                        style={{ textShadow: "1px 1px #000" }}
                        className="absolute  text-xs text-white/90 top-0 left-0 "
                      >
                        {item[3] === "0" || item[3] === "1"
                          ? ""
                          : item[3] + "x"}
                      </span>
                    </motion.span>
                  );
                }
              })
            : ""}
        </div>
      </div>
      <div
        className="w-[247px] h-[437px]"
        style={{
          backgroundImage: `url(${Bag2Image.src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-[63px]"></div>
        <div className="grid grid-cols-6 w-[247px] pl-[24px] pr-[25px] gap-y-[3px]">
          {bags
            ? bags.map((items: string, index: number) => {
                const item = items.split(",");
                let type = "bag";
                if (index >= 36 && index < 96) {
                  return (
                    <motion.span
                    whileTap={{ scale: 0.97 }}
                      onClick={(e) => handleClick(e, type, items, index)}
                      key={index}
                      className={`cursor-pointer relative`}
                    >
                      <Image
                        src={`${imagePath}${item[2]}.jpg`}
                        width="32"
                        height="32"
                        alt="item"
                      />
                      <span
                        style={{ textShadow: "1px 1px #000" }}
                        className="absolute  text-xs text-white/90 top-0 left-0  "
                      >
                        {item[3] === "0" || item[3] === "1"
                          ? ""
                          : item[3] + "x"}
                      </span>
                    </motion.span>
                  );
                }
              })
            : ""}
        </div>
      </div>
      <AnimatePresence>

          {isLoading ? (
            <motion.div 
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05
                }
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3
                }
              }
            }}
            onClick={()=>setModal(undefined)} className="absolute w-[320px] h-48 bg-black/80 border border-white flex flex-col items-center text-center text-white font-bold">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </motion.div>
          ) : (
            <motion.div 
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05
                }
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3
                }
              }
            }}
            onClick={()=>setModal(undefined)} className="absolute w-[320px]  bg-black/80 border border-white flex flex-col items-center text-center text-white font-bold">
              {modal && modal.series != 0 && (
                <>
                  <motion.span variants={itemVariants}>{modal?.series}</motion.span>
                  <motion.span variants={itemVariants}>
                    <Image
                      src={`${imagePath}${modal.itemId}.jpg`}
                      width="32"
                      height="32"
                      alt="item"
                    />
                  </motion.span>
                  <motion.span variants={itemVariants}
                    className={`${
                      modal?.tc?.pre
                        ? "text-teal-500"
                        : modal.ch.ch !== 0
                        ? "text-orange-200"
                        : ""
                    }`}
                  >
                    {modal?.tc?.pre && `${modal.tc.pre}`}{" "}
                    {modal?.itemin?.FLD_NAME &&
                      enConvert(modal?.itemin?.FLD_NAME)}{" "}
                    {modal?.tinhchat && modal.tinhchat === "2"
                      ? "(Cao cấp)"
                      : modal.tinhchat === "1"
                      ? "(Khá tốt)"
                      : ""}{" "}
                    {modal.ch.ch !== 0 && `+ ${modal.ch.ch}`}{" "}
                    {modal?.soluong !== 0 && `(${modal.soluong})`}
                  </motion.span>
                  <motion.span variants={itemVariants} className="text-xs">
                    Cấp độ {modal?.itemin?.FLD_LEVEL}
                  </motion.span>
                  <motion.span variants={itemVariants} className="text-blue-700">
                    {modal?.magic1?.value !== 0 &&
                      `${modal.magic1.name} + ${modal.magic1.value}`}
                  </motion.span>
                  <motion.span variants={itemVariants} className="text-blue-700">
                    {modal?.magic2?.value !== 0 &&
                      `${modal.magic2.name} + ${modal.magic2.value}`}
                  </motion.span>
                  <motion.span variants={itemVariants} className="text-blue-700">
                    {modal?.magic3?.value !== 0 &&
                      `${modal.magic3.name} + ${modal.magic3.value}`}
                  </motion.span>
                  <motion.span variants={itemVariants} className="text-blue-700">
                    {modal?.magic4?.value !== 0 &&
                      `${modal.magic4.name} + ${modal.magic4.value}`}
                  </motion.span>
                  <motion.span variants={itemVariants} className="text-pink-600">
                    {modal?.ch?.ttid !== 0 &&
                      `${modal.ch.ttname}  ${modal.ch.ttch + 1}`}
                  </motion.span>
                  <motion.span variants={itemVariants} className="text-sky-400">
                    {modal?.thuctinh !== "0" && `Thức Tỉnh ${modal.thuctinh}`}{" "}
                  </motion.span>
                  <motion.span variants={itemVariants} className="text-teal-500">
                    {modal?.tc?.pre && `${modal.tc.pre} ${modal.tc.name}`}{" "}
                  </motion.span>
                  <motion.span variants={itemVariants} className="">
                    {modal.u6 !== "0" && `Tứ linh ${modal.u6}`}
                  </motion.span>
                  <motion.span variants={itemVariants}>
                    {modal?.tinhchat !== "0" &&
                      `Tính chất ${
                        modal.tinhchat === "1"
                          ? "Khá tốt"
                          : modal.tinhchat === 2
                          ? "Cao Cấp"
                          : ""
                      }`}{" "}
                  </motion.span>

                  <motion.span variants={itemVariants} className="text-xs">
                    {enConvert(modal.itemin.FLD_DES).replace(/\^/g, "")}
                  </motion.span>
                  <button
                    className=" absolute left-0 top-0 text-xs text-white bg-yellow-400 px-2 py-1"
                    title="Xem lịch sử Item, Rớt ở đâu, ép như thế nào, trade cho ai"
                  >
                    Xem Log
                  </button>
                </>
              )}
            </motion.div>
          )}
      </AnimatePresence>

    
    </div>
  );
};

export default Inventory;
