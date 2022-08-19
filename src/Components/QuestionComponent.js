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


  const OptionsComponent = (props) => {
    return (
      <div className={` md:absolute md:top-28  mt-10 h-4/6 md:w-5/12 md:px-10 right-0 overflow-auto plain`} n>

        <div className="text-sm mb-4" dangerouslySetInnerHTML={{ __html: props.heading }}></div>

        <input type="radio" id="test1" name="radio-group" {...props.answer.op1} />
        <label for="test1" className='my-2 text-sm 2xl:text-sm pr-20' dangerouslySetInnerHTML={{ __html: props.options[0].Options }}></label>
        <br />

        <input type="radio" id="test2" name="radio-group" {...props.answer.op2} />
        <label for="test2" className='my-2 text-sm 2xl:text-sm pr-20' dangerouslySetInnerHTML={{ __html: props.options[1].Options }}></label>
        <br />

        <input type="radio" id="test3" name="radio-group" {...props.answer.op3} />
        <label for="test3" className='my-2 text-sm 2xl:text-sm pr-20' dangerouslySetInnerHTML={{ __html: props.options[2].Options }}></label>
        <br />

        <input type="radio" id="test4" name="radio-group" {...props.answer.op4} />
        <label for="test4" className='my-2 text-sm 2xl:text-sm pr-20' dangerouslySetInnerHTML={{ __html: props.options[3].Options }}></label>

      </div>

    )
  }
  console.log(props.examdata[props.curr].IsPassageQuestionSplit);

  return (
    <div className='relative float-left h-screen xl:w-9/12 2xl:w-9/12 pt-28 px-4 md:px-16 '>
      <div className='h-fit md:h-[85%]  w-fit md:w-7/12 overflow-auto plain md:border-r-2 pr-2'>
        <div className="text-2xl 2xl:text-3xl mb-4">
          Ques.{props.curr + 1}
        </div>
        {props.examdata[props.curr].Passage ? <div className='text-sm 2xl:text-sm ' dangerouslySetInnerHTML={{ __html: props.examdata[props.curr].Passage + props.examdata[props.curr].Items }}>
        </div>
          :
          <div className='  overflow-auto text-sm 2xl:text-sm plain'
            dangerouslySetInnerHTML={{ __html: props.examdata[props.curr].Items }}>
          </div>
        }
      </div>
      {props.examdata[props.curr].ItemType === "MCQ" && <OptionsComponent options={props.examdata[props.curr].ItemOptionResponse} answer={props.option} heading={props.examdata[props.curr].Passage ? props.examdata[props.curr].Items : "Tick The Correct Answer"} />}
      {props.examdata[props.curr].ItemType === "NE" && <input type="text" className='border-2 mt-10 rounded-md h-8 border-[#66BFBF]' />}



      <button className='mr-2 my-2 float-right md:mx-10 right-10 bottom-8 border-[#66BFBF] border-2 rounded-lg w-32 py-2 hover:bg-[#66BFBF] hover:text-white' onClick={props.next}>Next</button>
      <button className='mr-2 my-2 float-right md:mx-10 left-10 bottom-8 border-[#66BFBF] border-2 rounded-lg w-32 py-2 hover:bg-[#66BFBF] hover:text-white' onClick={props.prev}>Previous</button>


    </div>
  )
}

export default QuestionComponent