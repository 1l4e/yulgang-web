import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-300/20 py-4 text-center ">
        <div className="flex items-center justify-center">
          <div className="w-full md:w-2/3">
            <div className="flex flex-col md:flex-row items-center md:justify-between">
              <div className="flex items-center mb-2 md:mb-0">
                {/* Icons */}
                <span className="mr-2">Một sản phẩm của chamthoi</span>

              </div>
              <div>
                {/* Text */}
                <span className="text-sm">Hiệp khách giang hồ - 2023</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer