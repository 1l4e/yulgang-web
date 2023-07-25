"use client";
import { useEffect, useRef, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import enConvert from "@/lib/utils/charW";
import { cuongHoa, getOp, getOpDa, getTrungCap } from "@/lib/utils/reader";
import Image from "next/image";



const TBody = ({ data }) => {
  const [modal, setModal] = useState(undefined);
  const [pos, setPos] = useState({ x: 0, y: 0});
  const modalRef = useRef(null);


  const imagePath = `https://chamthoi.com/images/hkpro/ITEM_V20/`;
  useEffect(() => {}, [modal]);
  function handleModal(item: any, e: any) {
    const arr = item.FLD_ItemOption.split(",");
    const ch = cuongHoa(arr[0]);
    const tc = getTrungCap(parseInt(ch.type), +arr[6]);
    const res = {
      series: 0,
      itemId: item.FLD_ItemPID,
      soluong: 0,
      option: arr[0],
      magic1: getOp(arr[1]),
      magic2: getOp(arr[2]),
      magic3: getOp(arr[3]),
      magic4: getOp(arr[4]),
      trungcapset: arr[6],
      trungcap: arr[6],
      createdTime: 0,
      expiredTime: 0,
      thuctinh: arr[5],
      tinhchat: arr[7],
      lock: 0,
      tulinh: arr[8],
      itemin: {
        FLD_RESIDE2: item.FLD_RESIDE2,
        FLD_NAME: item.FLD_ItemName,
        FLD_LEVEL: item.FLD_LEVEL,
      },
    };
    let x =e.pageX-window.scrollX -100
    let y = e.pageY-window.scrollY +30
    if (y+300 > window.innerHeight){
      y= y-300
    }
    setPos({ x:  x, y: y});
    setModal({ ...res, ch, tc });
  }
  const stylesModal = {
    top: pos.y ,
    left:pos.x ,

  }

  return (
    <>
 
        <Table>
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow className="text-sm md:text-md">
              <TableHead>Lệnh mua</TableHead>
              <TableHead>Tên</TableHead>
              <TableHead className="text-right">Giá</TableHead>
              <TableHead className="hidden md:table-cell">Mô tả</TableHead>
              <TableHead className="hidden md:table-cell">Số lượng</TableHead>
              <TableHead className="hidden md:table-cell">Người bán</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((item: any, index: number) => (
              <TableRow key={index} className="text-sm md:text-md">
                <TableCell>!muaonl {item.id}</TableCell>
                <TableCell className="text-blue-500 hover:text-blue-600 relative cursor-pointer">
                  {" "}
                  <div 
                  onMouseEnter={(e)=>handleModal(item,e)}
                  onMouseLeave={()=>setModal(undefined)}
                  onClick={(e)=>handleModal(item,e)}
                  >
                    <Image
                      className="absolute left-0"
                      alt={item.FLD_ItemName}
                      width={24}
                      height={24}
                      src={`https://chamthoi.com/images/hkpro/ITEM_V20/${item.FLD_ItemPID}.jpg`}
                    />{" "}
                    <span className="pl-4">{item?.FLD_ItemName}</span>
                  </div>
                </TableCell>
                <TableCell className={`py-1 text-right`}>
                  {parseInt(item.FLD_Price).toLocaleString()}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {item.FLD_NOTICE}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {item.FLD_Amount}
                </TableCell>
                <TableCell className="text-blue-500 hover:text-blue-600 hidden md:table-cell">
                  <Link
                    href={`/character/${encodeURIComponent(
                      Buffer.from(item.FLD_NAME, "utf-8")
                        .toString("hex")
                        .toUpperCase()
                    )}`}
                  >
                    {item.FLD_NAME}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        
         
            {modal && (
              <div
              onClick={() => setModal(undefined)}
              style={stylesModal}
              ref={modalRef}
              className="fixed px-4 py-4  bg-black/80 border border-white flex flex-col items-center text-center text-white font-bold"
            >
                <span>
                  <Image
                    src={`${imagePath}${modal?.itemId}.jpg`}
                    width="32"
                    height="32"
                    alt="item"
                  />
                </span>
                <span
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
                </span>
                <span className="text-xs">
                  Cấp độ {modal?.itemin?.FLD_LEVEL}
                </span>
                <span className="text-blue-700">
                  {modal?.magic1?.value !== 0 &&
                    `${modal.magic1.name} + ${modal.magic1.value}`}
                </span>
                <span className="text-blue-700">
                  {modal?.magic2?.value !== 0 &&
                    `${modal.magic2.name} + ${modal.magic2.value}`}
                </span>
                <span className="text-blue-700">
                  {modal?.magic3?.value !== 0 &&
                    `${modal.magic3.name} + ${modal.magic3.value}`}
                </span>
                <span className="text-blue-700">
                  {modal?.magic4?.value !== 0 &&
                    `${modal.magic4.name} + ${modal.magic4.value}`}
                </span>
                <span className="text-pink-600">
                  {modal?.ch?.ttid !== 0 &&
                    `${modal.ch.ttname}  ${modal.ch.ttch + 1}`}
                </span>
                <span className="text-sky-400">
                  {modal?.thuctinh !== "0" && `Thức Tỉnh ${modal.thuctinh}`}{" "}
                </span>
                <span className="text-teal-500">
                  {modal?.tc?.pre && `${modal.tc.pre} ${modal.tc.name}`}{" "}
                </span>
                <span className="">
                  {+modal.u6 !== 0 && !modal && `Tứ linh ${modal.u6}`}
                </span>
                <span>
                  {modal?.tinhchat !== "0" &&
                    `Tính chất ${
                      modal.tinhchat === "1"
                        ? "Khá tốt"
                        : modal.tinhchat === 2
                        ? "Cao Cấp"
                        : ""
                    }`}{" "}
                </span>

               
              </div>
            )}
        
     
    </>
  );
};

export default TBody;
