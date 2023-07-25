

import XepHangPage from "@/components/pages/ranking/xephang"
import DownloadPage from "@/components/pages/download"
import NotFound from "@/app/not-found"
import { Suspense } from "react"
import Loading from "@/app/loading"
import Character from "@/components/pages/character"
import RankTLC from "@/components/pages/ranking/xephang-tlc"
import RankTaiPhu from "@/components/pages/ranking/xephang-taiphu"
import RankVoHuan from "@/components/pages/ranking/xephang-vohuan"
import RankGuild from "@/components/pages/ranking/xephang-guild"
import RankVip from "@/components/pages/ranking/xephang-vip"
import RankEvent from "@/components/pages/ranking/xephang-event"
import CashShop from "@/components/pages/shop/cashshop"
import BossShop from "@/components/pages/shop/bossshop"
import MarketPlace from "@/components/pages/shop/marketplace"
import VoHuanShop from "@/components/pages/shop/vohuanshop"
import VoHoangShop from "@/components/pages/shop/vohoangshop"
import EventShop from "@/components/pages/shop/eventshop"
import TinTuc from "@/components/pages/news"
import KhiCong from "@/components/pages/khicong"

const SlugPage = async ({params,searchParams}:any) => {
    const page = params.slug
    const pageMap = {
        "xep-hang" : XepHangPage,
        "download" : DownloadPage,
        "character": Character,
        "rank-tlc" : RankTLC,
        "rank-taiphu": RankTaiPhu,
        "rank-vohuan": RankVoHuan,
        "rank-guild" : RankGuild,
        "rank-vip" : RankVip,
        "rank-event" : RankEvent,
        "cash-shop" : CashShop,
        "boss-shop": BossShop,
        "market" : MarketPlace,
        "vohuan-shop": VoHuanShop,
        "vohoang-shop": VoHoangShop,
        "event-shop": EventShop,
        "tin-tuc" : TinTuc,
        "khi-cong": KhiCong
    }
    const Components = pageMap[page] || NotFound
  return (
   <Suspense fallback={<Loading />}>
        <Components params={params} searchParams={searchParams} />
   </Suspense>
  )
}

export default SlugPage