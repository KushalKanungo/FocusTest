// import logo from './logo.svg';
import './App.css';
import './Style/radiobutton.css'
import './Style/scrollbar.css'
import SideBarComponent from './Components/SideBarComponent';
import QuestionComponent from './Components/QuestionComponent';
import SectionBarComponent from './Components/SectionBarComponent';
import questions from "./ques2.json"
import { useState, useEffect } from 'react';
let verbalQues = questions.filter((elem) => elem.SubjectID === 203)
let dataQues = questions.filter((elem) => elem.SubjectID === 454 || elem.SubjectID === 7)
let mathsQues = questions.filter((elem) => elem.SubjectID === 427)

function App() {

  let examQuestions = {
    "verbal": verbalQues,
    "data": dataQues,
    "maths": mathsQues,

  }

  const [currQues, setCurrQues] = useState(0)
  const [currSection, setCurrSection] = useState(examQuestions.verbal)
  const [currTab, setCurrTab] = useState(0)
  const [option, setOption] = useState({ 'op1': null, 'op2': null, 'op3': null, 'op4': null })


  // let userResponse = { "verbal": { "ques": { "option": 0 } } }



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
      setCurrTab(0)
      localStorage.setItem('currTab', 0)
    }

    else if (section === 1) {
      setCurrSection(examQuestions.data)
      setCurrTab(1)
      localStorage.setItem('currTab', 1)

    }

    else if (section === 2) {
      setCurrSection(examQuestions.maths)
      setCurrTab(2)
      localStorage.setItem('currTab', 2)

    }

    setCurrQues(0)
  }

  useEffect(() => {
    let tab = localStorage.getItem('currTab')
    // console.log(typeof(tab));
    if (tab === '1' || tab === '2') {
      console.log("value changed")
      sectionHandeler(parseInt(tab))
    }


    return () => {

    }
  }, [])

  return (
    <div className='relative'>
      <SectionBarComponent sectionChange={sectionHandeler} currTab={currTab} />
      <QuestionComponent examdata={currSection} curr={currQues} next={nextQuestionHandeler} prev={prevQuestionHandeler} answered={answerHandeler} option={option} updateOption={OptionHandeler} />
      <SideBarComponent number={currSection.length} setQuestion={setCurrQues} curr={currQues} />
    </div>
  );
}

export default App;
