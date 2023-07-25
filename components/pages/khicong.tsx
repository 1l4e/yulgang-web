import { findManyKhiCong, findManyKhiCongThangThien } from "@/models/khicong.server"
import KhiCongComponents from "./client/khiCongComponents";

const KhiCong = async () => {
const data = await findManyKhiCong();
const tt = await findManyKhiCongThangThien();
  return (
    <div className="">
    <h1 className="text-3xl text-center py-4">Danh sách khí công</h1>
        <KhiCongComponents data={data} tt={tt} />
    </div>
  )
}

export default KhiCong