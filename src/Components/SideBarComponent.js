import React from 'react'

const SideBarComponent = (props) => {

  const QuestionBox = (props) => {
    return (
      <>
        <div className='h-10 w-10 rounded-md border-2 border-[#66BFBF] text-[#66BFBF]  flex justify-center items-center cursor-pointer hover:bg-[#66BFBF] duration-300 hover:text-white' onClick={() => props.setQuestion(props.no - 1)}>{props.no}</div>
      </>
    )
  }

  const boxesMaker = (number, setQuestion) => {
    let questionArray = []
    for (let i = 1; i <= number; i++) {
      questionArray.push(<QuestionBox no={i} setQuestion={setQuestion} />)
    }
    return questionArray
  }

  return (
    <>
      <div className='h-screen relative float-right bg-[#EAF6F6]  xl:w-3/12 2xl:w-3/12 z-20'>

        <div className='absolute flex justify-center flex-col left-1/2 -translate-x-1/2 items-center  text-4xl text-[#66BFBF]'> <img src="icons/clock.svg" className='my-4 mx-4' alt="" />00:00:00</div>

        <div className='grid absolute left-1/2 -translate-x-1/2 top-48 grid-cols-5 gap-6 w-8/12'>
          {boxesMaker(props.number, props.setQuestion)}

        </div>

        <button className='absolute bottom-14 left-1/2 -translate-x-1/2 bg-[#66BFBF] h-12 w-60 rounded-lg text-white text-2xl hover:bg-[#02acac]'>Submit</button>

      </div>
    </>
  )
}

export default SideBarComponent