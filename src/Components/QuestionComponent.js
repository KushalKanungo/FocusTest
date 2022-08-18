import React, { useEffect } from 'react'

const QuestionComponent = (props) => {

  // useEffect(() => {
  //   let response = JSON.stringify(localStorage.getItem('response'))
  //   let currQuesId = props.examdata[props.curr].ItemId
  //   let options = response.props.examdata[props.curr].ItemOptionResponse

  //   return () => {

  //   }
  // }, [])

  const optionHadeler = (index) => {
    let answerID = props.examdata[props.curr].options
  }



  const Options = (props) => {
    return (<>
      <div className='mt-10 h-4/6 w-1/2 absolute top-28 px-10 right-0 overflow-auto plain'>

        <div className="text-sm mb-4" dangerouslySetInnerHTML={{ __html: props.heading }}></div>

        <input type="radio" id="test1" name="radio-group" {...props.answer.op1} />
        <label for="test1" className='my-2 text-sm pr-20' dangerouslySetInnerHTML={{ __html: props.options[0].Options }}></label>
        <br />

        <input type="radio" id="test2" name="radio-group" {...props.answer.op2} />
        <label for="test2" className='my-2 text-sm pr-20' dangerouslySetInnerHTML={{ __html: props.options[1].Options }}></label>
        <br />

        <input type="radio" id="test3" name="radio-group" {...props.answer.op3} />
        <label for="test3" className='my-2 text-sm pr-20' dangerouslySetInnerHTML={{ __html: props.options[2].Options }}></label>
        <br />

        <input type="radio" id="test4" name="radio-group" {...props.answer.op4} />
        <label for="test4" className='my-2 text-sm pr-20' dangerouslySetInnerHTML={{ __html: props.options[3].Options }}></label>




      </div>
    </>
    )
  }

  return (
    <div className='relative  float-left h-screen xl:w-9/12 2xl:w-9/12 pt-28 px-16 '>

      <div className="xl:text-2xl 2xl:text-3xl mb-4">Ques.{props.curr + 1}</div>

      {props.examdata[props.curr].Passage ? <div className='h-4/6 2xl:h-4/6 w-1/2 overflow-auto xl:text-xs 2xl:text-sm plain' dangerouslySetInnerHTML={{ __html: props.examdata[props.curr].Passage + props.examdata[props.curr].Items }}>

      </div>
        :
        <div className='h-3/6 2xl:h-3/6 w-1/2 overflow-auto xl:text-xs 2xl:text-sm plain' dangerouslySetInnerHTML={{ __html: props.examdata[props.curr].Items }}>

        </div>
      }

      {props.examdata[props.curr].ItemType === "MCQ" && <Options options={props.examdata[props.curr].ItemOptionResponse} answer={props.option} heading={props.examdata[props.curr].Passage ? props.examdata[props.curr].Items : "Tick The Correct Answer"} />}
      {props.examdata[props.curr].ItemType === "NE" && <input type="text" className='border-2 mt-10 rounded-md h-8 border-[#66BFBF]' />}



      <button className='absolute left-10 bottom-8 border-[#66BFBF] border-2 rounded-lg w-32 py-2 hover:bg-[#66BFBF] hover:text-white' onClick={props.prev}>Previous</button>
      <button className='absolute right-10 bottom-8 border-[#66BFBF] border-2 rounded-lg w-32 py-2 hover:bg-[#66BFBF] hover:text-white' onClick={props.next}>Next</button>


    </div>
  )
}

export default QuestionComponent