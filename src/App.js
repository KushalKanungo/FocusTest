// import logo from './logo.svg';
import './App.css';
import './Style/radiobutton.css'
import './Style/scrollbar.css'
import SideBarComponent from './Components/SideBarComponent';
import QuestionComponent from './Components/QuestionComponent';
import SectionBarComponent from './Components/SectionBarComponent';
import questions from "./ques.json"
import { useState, useEffect } from 'react';


function App() {

  useEffect(() => {
    let userResponse = JSON.parse(localStorage.getItem('responses'))
    if (!userResponse) {
      localStorage.setItem('response', JSON.stringify({ 'total': 0 }))
    }

    return () => {

    }
  }, [])


  let verbalQues = questions.filter((elem) => elem.SubjectID === 203)
  let dataQues = questions.filter((elem) => elem.SubjectID === 454 || elem.SubjectID === 7)
  let mathsQues = questions.filter((elem) => elem.SubjectID === 427)

  let examQuestions = {
    "verbal": verbalQues,
    "data": dataQues,
    "maths": mathsQues,

  }

  const [currQues, setCurrQues] = useState(0)
  const [currSection, setCurrSection] = useState(examQuestions.verbal)
  const [option, setOption] = useState({ 'op1': null, 'op2': null, 'op3': null, 'op4': null })

  const OptionHandeler = (option) => {
    let newOption = { option: "checked" }
    setOption(newOption)
  }


  const nextQuestionHandeler = () => {
    let nextQues = currQues + 1
    if (nextQues < currSection.length) {
      setCurrQues(nextQues)
    }
  }

  const prevQuestionHandeler = () => {
    let prevQues = currQues - 1
    if (prevQues >= 0) {
      setCurrQues(prevQues)
    }
  }

  const answerHandeler = (quesID, answerID) => {
    let response = JSON.parse(localStorage.getItem("response"))
    response.quesID = answerID
    localStorage.setItem("response", JSON.stringify(response))
  }

  const sectionHandeler = (section) => {
    if (section === 0) {
      setCurrSection(examQuestions.verbal)
    }

    else if (section === 1) {
      setCurrSection(examQuestions.data)
    }

    else if (section === 2) {
      setCurrSection(examQuestions.maths)
    }

    setCurrQues(0)


  }

  return (
    <div className='relative'>
      <SectionBarComponent sectionChange={sectionHandeler} />
      <QuestionComponent examdata={currSection} curr={currQues} next={nextQuestionHandeler} prev={prevQuestionHandeler} answered={answerHandeler} option={option} updateOption={OptionHandeler} />
      <SideBarComponent number={currSection.length} setQuestion={setCurrQues} />
    </div>
  );
}

export default App;
