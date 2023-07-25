import React from 'react'
import News from './news'

const MainContent = () => {
  return (
    <>
        <div className='grid grid-cols-2 gap-4'>
          <div className='col-span-2'>
          <News />
          </div>
           
            <div className='dark:text-red-500'>Phân trang - Đang hoàn thiện</div>
           
        </div>
    </>
  )
}

export default MainContent