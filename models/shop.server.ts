
import db from "@/lib/drizzle"
import { desc, eq,sql } from "drizzle-orm"
import {ITEMSELL,ShopWorldBoss,ShopVoHuan,ShopVoHoang,ShopEvent,TBL_KyGuiVatPham} from '@/drizzle/schema'

export async function findManyCashShop(take:number,skip:number,type?:number){
    if (!type || type===0){
        const res = await db.select().from(ITEMSELL).limit(take).offset(take*skip).orderBy(desc(ITEMSELL.ID))
        return res;
    }
    else{
        const res = await db.select().from(ITEMSELL).where(eq(ITEMSELL.FLD_TYPE,type)).limit(take).offset(take*skip).orderBy(desc(ITEMSELL.ID))
        return res;
    }
    
}
export async function findManyBossShop(take:number,skip:number){
    const res = await db.select().from(ShopWorldBoss).orderBy(desc(ShopWorldBoss.ID)).limit(take).offset(take*skip)
    return res;
}

export async function findManyVHuanShop(take:number,skip:number){
    const res = await db.select().from(ShopVoHuan).orderBy(desc(ShopVoHuan.ID)).limit(take).offset(take*skip)
    return res;
}

export async function findManyVHoangShop(take:number,skip:number){
    const res = await db.select().from(ShopVoHoang).orderBy(desc(ShopVoHoang.ID)).limit(take).offset(take*skip)
    return res;
}
export async function findManyEventShop(take:number,skip:number){
    const res = await db.select().from(ShopEvent).orderBy(desc(ShopEvent.ID)).limit(take).offset(take*skip)
    return res;
}
export async function findManyMarketPlace(take:number,skip:number,type:number){
    if(type === 0) {
        const res = await db.select({
            id: TBL_KyGuiVatPham.id,
            FLD_Price: TBL_KyGuiVatPham.FLD_Price,
            FLD_NOTICE: TBL_KyGuiVatPham.FLD_NOTICE,
            FLD_ItemPID:TBL_KyGuiVatPham.FLD_ItemPID,
            FLD_Amount: TBL_KyGuiVatPham.FLD_Amount,
            FLD_NAME: TBL_KyGuiVatPham.FLD_NAME,
            FLD_ItemName: TBL_KyGuiVatPham.FLD_ItemName,
            FLD_ItemOption: TBL_KyGuiVatPham.FLD_ItemOption,
            FLD_RESIDE2: TBL_KyGuiVatPham.FLD_RESIDE2,
            FLD_LEVEL: TBL_KyGuiVatPham.FLD_LEVEL
        }).from(TBL_KyGuiVatPham).orderBy(desc(TBL_KyGuiVatPham.id)).limit(take).offset(take*skip)
        return res;
    }
    
    const res = await db.select({
        id: TBL_KyGuiVatPham.id,
        FLD_Price: TBL_KyGuiVatPham.FLD_Price,
        FLD_NOTICE: TBL_KyGuiVatPham.FLD_NOTICE,
        FLD_ItemPID:TBL_KyGuiVatPham.FLD_ItemPID,
        FLD_Amount: TBL_KyGuiVatPham.FLD_Amount,
        FLD_NAME: TBL_KyGuiVatPham.FLD_NAME,
        FLD_ItemName: TBL_KyGuiVatPham.FLD_ItemName,
        FLD_ItemOption: TBL_KyGuiVatPham.FLD_ItemOption,
        FLD_RESIDE2: TBL_KyGuiVatPham.FLD_RESIDE2,
        FLD_LEVEL: TBL_KyGuiVatPham.FLD_LEVEL
    }).from(TBL_KyGuiVatPham).orderBy(desc(TBL_KyGuiVatPham.id)).limit(take).offset(take*skip).where(eq(TBL_KyGuiVatPham.FLD_RESIDE2, type))
    return res;
}