import { cam_button, cung_button, daiphu_button, dao_button, dhl_button, dieuyen_button, hbq_button, kiem_button, ninja_button, quyen_button, thany_button, thuong_button, tuhao_button } from "../characterImages"

export const thangThienList = [
    {id:0 , text: 'All', slug: 'all' , color: 'text-gray-800'},
      {id:1 , text:"Đao" , slug:'NhanVatNgheNghiep1' , color: 'text-rose-500'},
      {id:2 , text:"Kiếm ", slug:'NhanVatNgheNghiep2' , color: 'text-blue-500'},
      {id:3 , text:"Thương", slug:'NhanVatNgheNghiep3' , color: 'text-yellow-500'},
      {id:4 , text:"Cung", slug:'NhanVatNgheNghiep4' , color: 'text-sky-500'},
      {id:5 , text:"Đại Phu", slug:'NhanVatNgheNghiep5' , color: 'text-fuchsia-500'},
      {id:6 , text:"Ninja", slug:'NhanVatNgheNghiep6' , color: 'text-orange-500'},
      {id:7 , text:"Cầm", slug:'NhanVatNgheNghiep7' , color: 'text-lime-500'},
      {id:8 , text:"H. Bảo Quân", slug:'NhanVatNgheNghiep8' , color: 'text-red-800'},
      {id:9 , text: "Đ. Hoa liên", slug:'NhanVatNgheNghiep9' , color: 'text-pink-500'},
      {id:10, text: "Quyền", slug:'NhanVatNgheNghiep10' , color: 'text-violet-500'},
      {id:11, text: "Diệu Yến", slug:'NhanVatNgheNghiep11' , color: 'text-green-500'},
      {id:12, text: "Tử Hào", slug:'NhanVatNgheNghiep12' , color: 'text-yellow-800'},
      {id:13, text: "Thần Y", slug:'NhanVatNgheNghiep13' , color: 'text-fuchsia-800'}
  ]

  export const ChucVuBang = [
    {id:1, text: "Thành viên",color:"text-black dark:text-white"},
    {id:2,text: "Cấp 2",color: "text-yellow-500"},
    {id:3,text: "Cấp 3",color: "text-orange-500"},
    {id:4,text: "Cấp 4",color: "text-pink-500"},
    {id:5,text: "Phó Bang",color: "text-red-500"},
    {id:6,text: "Bang Chủ",color: "text-violet-500"},
  ]
  
  
  const charList = [
      {id:0 , text: 'All', slug: 'all' , color: 'text-gray-800',icon: dao_button.src},
      {id:1 , text:"Đao" , slug:'dao' , color: 'text-rose-400',icon: dao_button.src},
      {id:2 , text:"Kiếm ", slug:'kiem' , color: 'text-blue-500',icon: kiem_button.src},
      {id:3 , text:"Thương", slug:'thuong' , color: 'text-yellow-500',icon: thuong_button.src},
      {id:4 , text:"Cung", slug:'cung' , color: 'text-sky-500',icon: cung_button.src},
      {id:5 , text:"Đại Phu", slug:'daiphu' , color: 'text-fuchsia-500',icon: daiphu_button.src},
      {id:6 , text:"Ninja", slug:'ninja' , color: 'text-orange-500',icon: ninja_button.src},
      {id:7 , text:"Cầm", slug:'cam' , color: 'text-lime-500',icon: cam_button.src},
      {id:8 , text:"H. Bảo Quân", slug:'hbq' , color: 'text-red-600',icon:hbq_button.src},
      {id:9 , text: "Đ. Hoa liên", slug:'dhl' , color: 'text-pink-500',icon: dhl_button.src},
      {id:10, text: "Quyền", slug:'quyen' , color: 'text-violet-500',icon: quyen_button.src},
      {id:11, text: "Diệu Yến", slug:'dieuyen' , color: 'text-green-500',icon: dieuyen_button.src},
      {id:12, text: "Tử Hào", slug:'tuhao' , color: 'text-yellow-800',icon: tuhao_button.src},
      {id:13, text: "Thần Y", slug:'thany' , color: 'text-fuchsia-800',icon: thany_button.src}
  ]
  
  const faction = [
      {id:0, name: "Trung lập", color: "text-white"},
      {id:1, name: "Chính", color: "text-blue-600"},
      {id:2, name: "Tà", color: "text-red-500"}
    ]
  const thangChuc = [
      {id:0, name: "Chưa gia nhập"},
      {id:1, name: "Thăng chức 1"},
      {id:2, name: "Thăng chức 2"},
      {id:3, name: "Thăng chức 3"},
      {id:4, name: "Thăng chức 4"},
      {id:5, name: "Thăng chức 5"},
      {id:6, name: "Thăng thiên 1"},
      {id:7, name: "Thăng thiên 2"},
      {id:8, name: "Thăng thiên 3"},
      {id:9, name: "Thăng thiên 4"},
      {id:10, name: "Thăng thiên 5"},
  ]
  
 
  

  
  
  export  {charList,faction,thangChuc}