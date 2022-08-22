import React from 'react'

const SectionBarComponent = (props) => {




  return (
    <div className='fixed items-center justify-center w-full xl:w-9/12 h-16 bg-white z-10 text-[#66BFBF] flex text-xs md:text-sm '>
      <button className={`border-[#66BFBF] border-2  xl:w-2/6 h-2/3 w-4/12  rounded-md mx-2 sm:mx-6 md:mx-10 xl:mx-10 overflow-hidden  hover:bg-[#66BFBF] hover:text-white ${props.currTab === 0 ? 'bg-[#66BFBF] text-white' : ' '}`} onClick={() => props.sectionChange(0)} >Verbal & Reading</button>
      <button className={`border-[#66BFBF] border-2  xl:w-2/6 h-2/3 w-4/12  rounded-md mx-2 sm:mx-6 md:mx-10 xl:mx-10 overflow-hidden  hover:bg-[#66BFBF] hover:text-white ${props.currTab === 1 ? 'bg-[#66BFBF] text-white' : ' '}`} onClick={() => props.sectionChange(1)} >Data Inter. & Logical Res.</button>
      <button className={`border-[#66BFBF] border-2  xl:w-2/6 h-2/3 w-4/12  rounded-md mx-2 sm:mx-6 md:mx-10 xl:mx-10 overflow-hidden  hover:bg-[#66BFBF] hover:text-white ${props.currTab === 2 ? 'bg-[#66BFBF] text-white' : ' '}`} onClick={() => props.sectionChange(2)} >Quantative Analysis</button>
    </div>
  )
}

export default SectionBarComponent