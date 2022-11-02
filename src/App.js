import { useState, useEffect } from "react";

import "./App.css";
import Questions from "./one-spark-questions.json";

import FormSteps from "./Components/FormSteps";

function App() {
  const [questions] = useState(Questions);
  const [ageValue, setAgeValue] = useState({ value: null });

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
  }, [questions.sections, firstSetQuestions, secondSetQuestions]);

  // TODO: loop over this instead

  // const secondSetQuestions = questionArrays[1];
  // const thirdSetQuestions = questionArrays[2];
  // const fourthSetQuestions = questionArrays[3];
  // const fifthSetQuestions = questionArrays[4];

  // console.log(firstSetQuestions);
  return (
    <div className="App">
      <div className="header">
        <svg
          width="111"
          height="24"
          viewBox="0 0 111 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.962 4.93c-3.826 0-6.927 3.11-6.927 6.945 0 3.836 3.101 6.945 6.927 6.945a6.926 6.926 0 006.304-4.066h-3.561a3.948 3.948 0 01-2.743 1.106 3.977 3.977 0 01-3.823-2.904H44.805c.055-.352.084-.711.084-1.078 0-3.839-3.101-6.948-6.927-6.948zm-3.687 5.465a3.972 3.972 0 013.687-2.505 3.972 3.972 0 013.688 2.505h-7.375zM7.882 4.93C4.056 4.93.955 8.04.955 11.875c0 3.836 3.1 6.945 6.927 6.945 3.826 0 6.927-3.109 6.927-6.945 0-3.836-3.101-6.945-6.927-6.945zm0 10.54a3.59 3.59 0 01-3.586-3.595A3.59 3.59 0 017.882 8.28a3.59 3.59 0 013.586 3.595 3.59 3.59 0 01-3.586 3.596zM22.893 4.934c-3.727 0-6.338 2.4-6.338 5.837v7.774h3.564v-7.526c0-1.718 1.115-2.89 2.802-2.89 1.66 0 2.774 1.172 2.774 2.89v7.526h3.564V10.77c0-3.436-2.611-5.837-6.366-5.837zM51.888 10.88c-1.714-.355-3.128-.627-3.128-2.318 0-1.228 1.17-2.046 2.856-2.046 1.768 0 2.965.927 3.02 2.318h1.931c0-2.29-2.013-3.873-4.924-3.873-2.938 0-4.95 1.5-4.95 3.791 0 3.028 2.855 3.574 4.896 3.928 1.714.328 3.264.573 3.264 2.291 0 1.337-1.278 2.237-3.101 2.237-1.931 0-3.265-.982-3.319-2.455h-2.04c.054 2.373 2.203 4.037 5.305 4.037 3.074 0 5.196-1.61 5.196-3.928 0-3.082-3.047-3.6-5.006-3.982zM66.054 4.934c-4.108 0-7.019 2.919-7.019 6.928V24h2.068v-7.937c1.06 1.664 2.938 2.7 5.196 2.7 3.917 0 6.746-2.891 6.746-6.846 0-4.064-2.91-6.983-6.991-6.983zm-.027 12.002c-2.857 0-4.924-2.128-4.924-5.074 0-2.973 2.067-5.1 4.924-5.1 2.829 0 4.897 2.127 4.897 5.1 0 2.946-2.068 5.074-4.897 5.074zM81.736 4.961c-4.053 0-6.992 2.891-6.992 6.9 0 4.01 2.775 6.929 6.584 6.929 2.34 0 4.298-1.064 5.36-2.7v2.454h2.067v-6.682c0-4.01-2.911-6.9-7.02-6.9zm.054 12.001c-2.856 0-4.924-2.127-4.924-5.1 0-2.946 2.068-5.073 4.924-5.073 2.83 0 4.897 2.127 4.897 5.073 0 2.973-2.067 5.1-4.897 5.1zM91.537 10.09v8.455h2.067V10.28c0-2.127 1.279-3.327 3.4-3.327V5.18c-3.427 0-5.467 1.854-5.467 4.91zM110.045 5.18h-2.475l-6.284 6.082V0h-2.095v18.545h2.095v-6.546l6.284 6.546h2.475l-6.692-6.928 6.692-6.437z"
            fill="#1E1E1E"
          ></path>
        </svg>
      </div>
      <FormSteps
        firstQuestionData={firstSetQuestions}
        secondQuestionData={secondSetQuestions}
        thirdQuestionData={thirdSetQuestions}
        fourthQuestionData={fourthSetQuestions}
        fifthQuestionData={fithSetQuestions}
        ageValue={ageValue}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
