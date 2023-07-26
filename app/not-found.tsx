import React from 'react'
import Link from 'next/link'
const NotFound = () => {
  return (
<div className="flex items-center justify-center w-screen h-[50vh] flex-col">
            <p className="text-5xl text-black  md:text-7xl lg:text-9xl">404</p>
            <span>Không tìm thấy trang bạn yêu cầu, Vui lòng quay trở lại</span>
            <Link href="/" className="bg-green-500 px-8 py-4 text-white hover:bg-green-600 mt-10 rounded-xl text-3xl" title="Back">Back</Link>
        </div>
  )
}

export default NotFound