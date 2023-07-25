import React from 'react'
import News from '../sections/news'

const TinTuc = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center py-4">Tin tức</h1>
      <div className="flex justify-center">
      <News />
      </div>
       
    </div>
    
  )
}

export default TinTuc