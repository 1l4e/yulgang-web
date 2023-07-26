import { findManyDeTu, findOneCharacter } from "@/models/character.server";
import CharacterInfo from "../charInfo/cinfo";
import { charList, faction, thangChuc } from "@/lib/utils/constant";
import Link from "next/link";
import { buffRead } from "@/lib/utils/reader";
import Buff from "../charInfo/Buff";
import Inventory from "../charInfo/Inventory";
import NotFound from '@/app/not-found'



const Character = async ({ params, searchParams }) => {
  let character = decodeURI(params.child);
  character = Buffer.from(character,'hex').toString();
  const imagePath = `https://chamthoi.com/images/hkpro/ITEM_V20/`
  const characterData = await findOneCharacter(character);
  if (characterData === null || !characterData){
    return  <NotFound />
  }
  let buff = characterData.FLD_CTIME_STR;
  let bbuff = characterData.FLD_CHTIME;
  let rbuff = buffRead(buff);
  let tbuff = buffRead(bbuff);

  const detu = await findManyDeTu(character);
  const bags = characterData.FLD_ITEM_STR.split(";");
  const wearList = characterData.FLD_WEARITEM_STR.split(";");
  return (
    <div className="relative mt-10">
      <h1 className="text-center text-3xl">{characterData.FLD_NAME}</h1>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 mt-10 gap-4">
      <div className="col-span-1">
        <CharacterInfo charId={characterData.FLD_JOB} />
      </div>
      <div className="col-span-2 max-w-2xl grid justify-end">
          <div className="grid grid-cols-2 justify-center items-center gap-y-3 gap-x-10 border p-4 font-bold diagonal ">
              <div className="even:bg-cyan-200 px-2">Cấp độ / CS</div>
              <div className="even:bg-cyan-200 px-2">{characterData.FLD_LEVEL} / {characterData.FLD_ZS}</div>
              <div className="even:bg-cyan-200 px-2">Kinh Nghiệm</div>
              <div className="even:bg-cyan-200 px-2">{parseInt(characterData.FLD_EXP).toLocaleString()}</div>
              <div className="even:bg-cyan-200 px-2">Nghề nghiệp</div>
              <div className={`even:bg-cyan-200 px-2 ${charList[characterData.FLD_JOB].color}`}>{characterData.FLD_JOB ? charList[characterData.FLD_JOB].text : ''}</div>
              <div className="even:bg-cyan-200 px-2">Thăng chức</div>
              <div className="even:bg-cyan-200 px-2">{characterData.FLD_JOB_LEVEL ? thangChuc[characterData.FLD_JOB_LEVEL].name : ''}</div>
              <div className="even:bg-cyan-200 px-2">Phe phái</div>
              <div className={`even:bg-cyan-200 px-2 ${faction[characterData.FLD_ZX ].color}`}>{characterData.FLD_ZX ? faction[characterData.FLD_ZX ].name : ''}</div>
              <div className="even:bg-cyan-200 px-2">Võ huân</div>
              <div className="even:bg-cyan-200 px-2">{characterData.FLD_WX.toLocaleString()}</div>
              <div className="even:bg-cyan-200 px-2">ATT / DEF /HP /MP</div>
              <div className="even:bg-cyan-200 px-2">{characterData.FLD_ADD_AT}/ {characterData.FLD_ADD_DF} /{characterData.FLD_ADD_HP} / {characterData.FLD_ADD_MP}</div>
              <div className="even:bg-cyan-200 px-2">Kết hôn/ Điểm hoa</div>
              <div className="even:bg-cyan-200 px-2"><Link className="text-blue-500 hover:text-blue-600" href={`/character/${Buffer.from(characterData.FLD_QlNAME,'utf8').toString('hex').toUpperCase()}`}>{characterData.FLD_QlNAME}</Link> / {characterData.FLD_QlDu}</div>
              <div className="even:bg-cyan-200 px-2">Cấp độ Vip / Điểm vip</div>
              <div className="even:bg-cyan-200 px-2">{characterData.FLD_Member_VIP} / {characterData.FLD_VIP_Point}</div>
              <div className="even:bg-cyan-200 px-2">Gold</div>
              <div className="even:bg-cyan-200 px-2">{parseInt(characterData?.FLD_MONEY).toLocaleString()}</div>
              <div className="even:bg-cyan-200 px-2">{detu!==null && detu[0]?.FLD_SNAME===characterData.FLD_NAME ? "Đệ tử" : "Sư Phụ"}</div>

              <ul className="">
                {detu!==null &&detu?.map((item:any,index:number)=>{
                  if (detu[0].FLD_SNAME===characterData.FLD_NAME){
                    return(
                      <li key={index} className="bg-cyan-200 mb-1 px-2">
                        <Link className=" text-blue-500 hover:text-blue-600" href={`/character/${Buffer.from(item.FLD_TNAME,'utf8').toString('hex').toUpperCase()}`}>{item.FLD_TNAME}</Link> | Cấp: {item.FLD_STLEVEL} | EXP: {item.FLD_STYHD.toLocaleString()}
                      </li>
                    )
                  }
                  return(
                  <li key={index} className="bg-cyan-200 mb-1 px-2">
                    <Link className=" text-blue-500 hover:text-blue-600" href={`/character/${Buffer.from(item.FLD_SNAME,'utf8').toString('hex').toUpperCase()}`}>{item.FLD_SNAME}</Link> | Cấp: {item.FLD_STLEVEL} | EXP: {item.FLD_STYHD.toLocaleString()}
                  </li>
                )})}
              </ul>
          </div>
      </div>

      <Buff rbuff={rbuff} tbuff={tbuff} />
      <Inventory wearList={wearList} bags={bags} />
    </div>
    </div>
    
  );
};

export default Character;
