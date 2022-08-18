import React from 'react'

const SectionBarComponent = (props) => {




  return (
    <div className='absolute flex items-center top-6 left-0 w-screen h-16 bg-white z-10'>
      <button className='border-[#66BFBF] border-2 w-1/6 h-2/3 rounded-md ml-16 text-white bg-[#66BFBF]' onClick={() => props.sectionChange(0)} >Verbal & Reading</button>
      <button className='border-[#66BFBF] border-2 w-1/6 h-2/3 rounded-md ml-10 text-[#66BFBF] hover:bg-[#66BFBF] hover:text-white' onClick={() => props.sectionChange(1)} >Data Inter. & Logical Res.</button>
      <button className='border-[#66BFBF] border-2 w-1/6 h-2/3 rounded-md ml-10 text-[#66BFBF] hover:bg-[#66BFBF] hover:text-white' onClick={() => props.sectionChange(2)} >Quantative Analysis</button>
    </div>
  )
}

export default SectionBarComponent