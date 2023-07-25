import db from "@/lib/drizzle";
import {TBL_AscQigongOption,TBL_QigongOption} from "@/drizzle/schema";
import {sql} from "drizzle-orm"



export async function findManyKhiCong(){
    const res = await db.select().from(TBL_QigongOption)
   /*  const res = await db.execute(sql`SELECT * FROM TBL_QigongOption`) */
    return res
}

export async function findManyKhiCongThangThien(){
    const res= await db.select().from(TBL_AscQigongOption)
    /* const res = await db.execute(sql`SELECT * FROM TBL_AscQigongOption`) */
    return res
}