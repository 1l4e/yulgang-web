import db from "@/lib/drizzle"
import { desc,eq,or } from "drizzle-orm"
import { Character,TBL_SuDoSoLieu } from "@/drizzle/schema"


export async function findManyCharacterSideBar(take:number,skip:number){
    return await db.query.Character.findMany({
        orderBy:[desc(Character.FLD_ZS),desc(Character.FLD_LEVEL),desc(Character.FLD_EXP)],
            limit: take,
            offset: take*skip,
            columns: {
            FLD_NAME:true,
            FLD_JOB:true,
            FLD_LEVEL:true,
            FLD_ZS:true,
            FLD_WX:true,
            }
    })
}


export async function findManyCharacter(take:number,skip:number,char:number){
    if (char ===0){
        return await db.query.Character.findMany({
            orderBy:[desc(Character.FLD_ZS),desc(Character.FLD_LEVEL),desc(Character.FLD_EXP)],
            limit: take,
            offset: take*skip
        })
    }
    return await db.query.Character.findMany({
        where: eq(Character.FLD_JOB, char),
        orderBy:[desc(Character.FLD_ZS),desc(Character.FLD_LEVEL),desc(Character.FLD_EXP)],
        limit:take,
        offset: take*skip
    })
 }

export async function findOneCharacter(char:string){
    const res = await db.query.Character.findMany({
        where: eq(Character.FLD_NAME, char),
        columns: {
            FLD_NAME:true,
            FLD_JOB:true,
            FLD_VIP_Point:true,
            FLD_Member_VIP:true,
            FLD_MONEY:true,
            FLD_EXP: true,
            FLD_WX:true,
            FLD_LEVEL:true,
            FLD_JOB_LEVEL:true,
            FLD_ZS:true,
            FLD_ADD_AT:true,
            FLD_ADD_DF:true,
            FLD_ADD_HP:true,
            FLD_ADD_MP:true,
            FLD_ADD_HB:true,
            FLD_ADD_MZ:true,
            FLD_ZX:true,
            FLD_QlDu:true,
            FLD_QlNAME:true,
            FLD_X:true,
            FLD_Y:true,
            FLD_MENOW:true,
            FLD_CTIME:true,
            FLD_CHTIME:true,
            FLD_ITEM_STR:true,
            FLD_WEARITEM_STR:true,
            FLD_CTIME_STR:true
        },
        limit:1
    })
    if (res) {
        return res[0]
    }
    return null
   }

export async function findManyCharacterImport(){
    return await db.query.Character.findMany({
        columns: {
            FLD_NAME:true,
            FLD_JOB:true,
            FLD_VIP_Point:true,
            FLD_Member_VIP:true,
            FLD_MONEY:true,
            FLD_EXP: true,
            FLD_WX:true,
            FLD_LEVEL:true,
            FLD_JOB_LEVEL:true,
            FLD_ZS:true,
            FLD_ADD_AT:true,
            FLD_ADD_DF:true,
            FLD_ADD_HP:true,
            FLD_ADD_MP:true,
            FLD_ADD_HB:true,
            FLD_ADD_MZ:true,
            FLD_ZX:true,
            FLD_QlDu:true,
            FLD_QlNAME:true,
            FLD_X:true,
            FLD_Y:true,
            FLD_MENOW:true,
            FLD_CTIME:true,
            FLD_CHTIME:true,
            FLD_ITEM:true,
            FLD_WEARITEM:true,
            FLD_CTIME_STR:true
        }
    })

}

export async function findManyDeTu(Character:string){
    const res = await db.query.TBL_SuDoSoLieu.findMany({
        where: or(eq(TBL_SuDoSoLieu.FLD_SNAME, Character), eq(TBL_SuDoSoLieu.FLD_TNAME, Character))
    })
    return res

}