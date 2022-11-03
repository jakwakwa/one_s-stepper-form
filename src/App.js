import * as React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Questions from "./one-spark-questions.json";

import FormSteps from "./Components/FormSteps";
import "antd/dist/antd.min.css";

function App() {
  const [questions] = useState(Questions);
  const [ageValue, setAgeValue] = useState({ value: null });
  const [selectedCb, setSelectedCb] = useState([]);
  const [firstSetQuestions, setFirstSetQuestions] = useState([]);
  const [secondSetQuestions, setSecondSetQuestions] = useState([]);
  const [thirdSetQuestions, setThirdSetQuestions] = useState([]);
  const [fourthSetQuestions, setFourthSetQuestions] = useState([]);
  const [fithSetQuestions, setFifthSetQuestions] = useState([]);

  function handleChange(event) {
    setAgeValue({ value: event.target.value });
  }
  // console.log(ageValue);

  useEffect(() => {
    let firstSetQ;
    let secondSetQ;
    let thirdSetQ;
    let fourthSetQ;
    let fifthSetQ;
    let questionArrays;

    questionArrays = questions.sections.map((item) => item);

    // eslint-disable-next-line no-unused-vars
    firstSetQ = questionArrays[0];
    secondSetQ = questionArrays[1];
    thirdSetQ = questionArrays[2];
    fourthSetQ = questionArrays[3];
    fifthSetQ = questionArrays[4];

    setFirstSetQuestions(firstSetQ);
    setSecondSetQuestions(secondSetQ);
    setThirdSetQuestions(thirdSetQ);
    setFourthSetQuestions(fourthSetQ);
    setFifthSetQuestions(fifthSetQ);
    console.log(selectedCb);
  }, [questions.sections, firstSetQuestions, secondSetQuestions]);

  // TODO: loop over this instead

  // const secondSetQuestions = questionArrays[1];
  // const thirdSetQuestions = questionArrays[2];
  // const fourthSetQuestions = questionArrays[3];
  // const fifthSetQuestions = questionArrays[4];

  // console.log(firstSetQuestions);
  return (
    <div className="App">
      <div className="header"></div>
      <FormSteps
        firstQuestionData={firstSetQuestions}
        secondQuestionData={secondSetQuestions}
        thirdQuestionData={thirdSetQuestions}
        fourthQuestionData={fourthSetQuestions}
        fifthQuestionData={fithSetQuestions}
        ageValue={ageValue}
        handleChange={handleChange}
        selectedCb={selectedCb}
        setSelectedCb={setSelectedCb}
      />
    </div>
  );
}

export default App;
