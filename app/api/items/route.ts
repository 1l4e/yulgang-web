import db from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import {TBL_XWWL_ITEM} from '@/drizzle/schema'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


export async function GET(request:Request){
    const {searchParams} = new URL(request.url)
    const itemId = searchParams.get('id')
    if (!itemId){
        return NextResponse.json([{
            FLD_NAME: "Slot Trống",
            FLD_LEVEL: "0",
            FLD_DES: ""
          }])
    }
    const res = await db.select().from(TBL_XWWL_ITEM).where(eq(TBL_XWWL_ITEM.FLD_PID,+itemId))
   /* const res = await prisma.tBL_XWWL_ITEM.findMany({
    where: {
        FLD_PID:+itemId
    }
   }) */
    if (!res){
        return NextResponse.json([{
            FLD_NAME: "Slot Trống",
            FLD_LEVEL: "0",
            FLD_DES: ""
          }])
    }
    return NextResponse.json(res)
    
}