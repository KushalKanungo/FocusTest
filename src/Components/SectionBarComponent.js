import React from 'react'

const SectionBarComponent = (props) => {


  const QuestionGrid = (props) => {


  }


  return (
    <div className='absolute flex items-center top-6 left-0 w-screen h-16 bg-white'>
      <button className='border-[#66BFBF] border-2 w-1/6 h-2/3 rounded-md ml-10 hover:bg-[#66BFBF]'>Verbal & Reading</button>
      <button className='border-[#66BFBF] border-2 w-1/6 h-2/3 rounded-md ml-10 hover:bg-[#66BFBF]'>Data Inter. & Logical Res.</button>
      <button className='border-[#66BFBF] border-2 w-1/6 h-2/3 rounded-md ml-10 hover:bg-[#66BFBF]'>Quantative Analysis</button>
    </div>
  )
}

export default SectionBarComponent