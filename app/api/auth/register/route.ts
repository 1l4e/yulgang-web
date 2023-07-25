
import { NextResponse } from "next/server";
import db from "@/lib/drizzle";
import {TBL_ACCOUNT} from '@/drizzle/schema'
import {eq,InferModel } from 'drizzle-orm'

type NewUser = InferModel<typeof TBL_ACCOUNT, "insert">;

export async function POST(req: Request) {
  /* return NextResponse.json({ error: "Chưa mở tính năng đăng ký" }, { status: 400 }); */
  const { username, password,question,answer,mail,fullname,idnum,sex,phone } = await req.json();
  if (!username || !password  || !question || !answer || !mail || !fullname || !idnum || !sex || !phone){
    return NextResponse.json({error: "Tính năng này chưa mở"}, {status:400})
  }

  const exists = await db.select({
    FLD_ID: TBL_ACCOUNT.FLD_ID
  }).from(TBL_ACCOUNT).where(eq(TBL_ACCOUNT.FLD_ID,username)).limit(1)
  if (exists.length === 1) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  } else {
    const insertUser = async (user: NewUser) => {
      return db.insert(TBL_ACCOUNT).values(user);
    }
    const newUser: NewUser = {
      FLD_ID: username,
      FLD_PASSWORD: password,
      FLD_CARD: idnum,
      FLD_NAME: fullname,
      FLD_QU: question,
      FLD_ANSWER: answer,
      FLD_Mail: mail,
      FLD_REGIP: "",
      FLD_RXPIONT: 0,
      FLD_RXPIONTX: 0,
      FLD_SPREADER_LEVEL: 0,
      FLD_TRANSFER_TIMES:0,
      FLD_GIFTPOINT:0,
      FLD_PHONE: phone
    }
    await insertUser(newUser);
    return NextResponse.json(newUser);
  }
}
