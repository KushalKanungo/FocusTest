import React from 'react'

const SideBarComponent = (props) => {
  return (
    <>
      <div className='h-screen relative float-right bg-[#EAF6F6]  xl:w-4/12 2xl:w-3/12'>

        <div className='flex items-center'> <img src="icons/clock.svg" alt="" /> 00 : 00 : 00</div>

        <button className='absolute bottom-14 left-1/2 -translate-x-1/2 bg-[#66BFBF] h-12 w-60 rounded-lg text-white text-2xl hover:bg-[#02acac]'>Submit</button>

      </div>
    </>
  )
}

export default SideBarComponent