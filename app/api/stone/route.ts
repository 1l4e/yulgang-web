import db from "@/lib/drizzle";
import { NextResponse } from "next/server";
import {TBL_ListMagicQigong} from "@/drizzle/schema"
import { eq } from "drizzle-orm";

export async function GET(request:Request){
    const {searchParams} = new URL(request.url)
    const itemId = searchParams.get('id')
    if (!itemId){
        return NextResponse.json([{
            FLD_NAME: "Slot Trống",
            QigongID: "0",
          }])
    }
    const res = await db.select().from(TBL_ListMagicQigong).where(eq(TBL_ListMagicQigong.QigongID,+itemId))
    if (!res){
        return NextResponse.json([{
            FLD_NAME: "Slot Trống",
            QigongID: "0",
          }])
    }
    return NextResponse.json(res)
    
}