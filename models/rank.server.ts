import { Character, EventTop,TBL_XWWL_Warehouse,TBL_XWWL_PublicWarehouse,TBL_XWWL_Guild,TBL_XWWL_GuildMember } from "@/drizzle/schema"
import db from "@/lib/drizzle"
import { desc, eq,sql } from "drizzle-orm"



export async function findManyRankTLC(
  take: number,
  skip: number,
) {

  /* return await db.select().from(eventtop).orderBy(desc(eventtop.GietNguoiSoLuong),desc(eventtop.TuVongSoLuong))
   */
  return await db.query.EventTop.findMany({
    orderBy: [desc(EventTop.GietNguoiSoLuong)],
    limit: take,
    offset: skip*take
  })
 }


export async function findManyMoney(take:number,skip:number){
    const res = await db.select({
      id: Character.FLD_ID,
      name:Character.FLD_NAME,
      money: Character.FLD_MONEY,
      FLD_JOB:Character.FLD_JOB,
      whmoney: TBL_XWWL_Warehouse.FLD_MONEY,
    }).from(Character).innerJoin(TBL_XWWL_Warehouse, eq(TBL_XWWL_Warehouse.FLD_NAME,Character.FLD_NAME)).limit(take).offset(take*skip).orderBy(desc(sql`CONVERT(${Character.FLD_MONEY},SIGNED INTEGER) + CONVERT(${TBL_XWWL_Warehouse.FLD_MONEY},SIGNED INTEGER) `))
    return res
}

export async function findManyVoHuan(take:number,skip:number){
  const res = await db.query.Character.findMany({
    orderBy: [desc(Character.FLD_WX)],
    columns: {
      FLD_NAME:true,
      FLD_JOB:true,
      FLD_LEVEL:true,
      FLD_WX:true,
      FLD_ZX:true,
      FLD_ZS:true,
    },
    limit: take,
    offset: skip*take,
  })
  return res
}

export async function findManyGuild(take:number,skip:number){
  const res = await db.query.TBL_XWWL_Guild.findMany({
    orderBy: [desc(TBL_XWWL_Guild.BangPhaiCongHien),desc(TBL_XWWL_Guild.Leve)],
    columns: {
      G_Name:true,
      G_Master:true,
      Leve: true,
      BangPhaiCongHien:true
    }
  })
  return res
}
export async function findManyGuildJoin(take:number,skip:number){
  const res = await db.select({
    G_Name:TBL_XWWL_Guild.G_Name,
    G_Master:TBL_XWWL_Guild.G_Master,
    Leve: TBL_XWWL_Guild.Leve,
    BangPhaiCongHien:TBL_XWWL_Guild.BangPhaiCongHien,
    Member: sql`count(TBL_XWWL_GuildMember.G_Name) AS Member`
  }).from(TBL_XWWL_Guild).leftJoin(TBL_XWWL_GuildMember,eq(TBL_XWWL_GuildMember.G_Name,TBL_XWWL_Guild.G_Name)).groupBy(TBL_XWWL_Guild.G_Name,TBL_XWWL_Guild.G_Master,TBL_XWWL_Guild.Leve,TBL_XWWL_Guild.BangPhaiCongHien)
  .orderBy(desc(sql`CONVERT(${TBL_XWWL_Guild.Leve},SIGNED INTEGER)`),desc(sql`CONVERT(${TBL_XWWL_Guild.BangPhaiCongHien},SIGNED INTEGER)`))
  return res
}

export async function findManyGuildMember(guild:string,take:number,skip:number){
  const res = await db.select().from(TBL_XWWL_GuildMember).where(eq(TBL_XWWL_GuildMember.G_Name,guild)).orderBy(desc(TBL_XWWL_GuildMember.Leve),desc(TBL_XWWL_GuildMember.FLD_Donate))

  return res
}

export async function findManyEvent(take:number,skip:number){
  const res = await db.select().from(EventTop)
}

export async function findManyVip(take:number,skip:number){
  const res = await db.select({
    name: Character.FLD_NAME,
    level:Character.FLD_LEVEL,
    job: Character.FLD_JOB,
    vip: Character.FLD_Member_VIP,
    vpoint: Character.FLD_VIP_Point
  }).from(Character).orderBy(desc(Character.FLD_Member_VIP),desc(Character.FLD_VIP_Point)).limit(take).offset(skip*take)
  return res
}