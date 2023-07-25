import { cam, cung, daiphu, dao, dhl, dieuyen, hbq, kiem, ninja, quyen, thany, thuong, tuhao } from "@/lib/characterImages";
import Image from "next/image";
import bg from '@/public/ani/bg.png'
import circle from '@/public/ani/circle.png';
import ani from '@/public/ani/circle-animation.png'

const CharacterInfo = ({ charId }) => {
  let image = "";
  switch (charId) {
    case 1:
      image = dao.src;
      break;
    case 2:
      image = kiem.src;
      break;
    case 3:
      image = thuong.src;
      break;
    case 4:
      image = cung.src;
      break;
    case 5:
      image = daiphu.src;
      break;
    case 6:
      image = ninja.src;
      break;
    case 7:
      image = cam.src;
      break;
    case 8:
      image = hbq.src;
      break;
    case 9:
      image = dhl.src;
      break;
    case 10:
      image = quyen.src;
      break;
    case 11:
      image = dieuyen.src;
      break;
    case 12:
      image = tuhao.src;
      break;
    case 13:
      image = thany.src;
      break;

    default:
      image = dao.src;
      break;
  }
  return (
    <>
     <div className="relative max-w-[600px] mx-auto">
                <Image className="absolute top-0" width={860} height={860}  alt=""  src={bg.src}></Image>
                <Image  className="absolute top-0" width={776} height={776}  alt=""  src={circle.src}></Image>
                <Image  className="absolute top-0 animate-spin-slow" width={706} height={706}  alt=""  src={ani.src}></Image>
                <Image width={600} height={600} className="relative" title="" alt=""  src={image}></Image>
        </div>
    </>
  )
};

export default CharacterInfo;
