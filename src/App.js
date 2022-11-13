import * as React from "react";
import { useState } from "react";
import "./App.scss";
import Questions from "./one-spark-questions.json";
import DefautlValues from "./DefaultValues/DefaultValues";
import FormSteps from "./Components/FormSteps";
import "antd/dist/antd.min.css";

import OneSparkLogoSvg from "./Logo/Logo";

function App() {
  const [ageValue] = useState({ value: 0 });
  const [selectedCb, setSelectedCb] = useState([]);
  const [checkedVal, setCheckedVal] = useState("");

  const [formValues, setFormValues] = useState(DefautlValues);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [firstStepVal, setFirstStepVal] = useState({
    salary: 0,
    age: 0,
    gender: "",
    jobTitle: "",
    qualification: "",
  });

  const [secondStepVal, setSecondStepVal] = useState({
    firstName: "",
    emailAddress: "",
    phone: "",
  });

  const [thirdStepVal, setThirdStepVal] = useState({
    specailist: "",
    meds: "",
    hospital: "",
  });

  const [fourthStepVal, setFourthStepVal] = useState({
    nicotine: "",
    alcohol: "",
    drugs: [],
  });

  const [fifthStepVal, setFifthStepVal] = useState({
    hasInsurance: "",
  });

  const [firstSet, secondSet, thirdSet, fourthSet, fifthSet] =
    Questions.sections;

  const [questionsSections] = useState({
    firstSet: firstSet.questions,
    secondSet: secondSet.questions,
    thirdSet: thirdSet.questions,
    fourthSet: fourthSet.questions,
    fifthSet: fifthSet.questions,
  });

  function handleRadio(e) {
    const { value, name } = e.target;

    if (name === "prev_insurance") {
      setFifthStepVal({
        ...fifthStepVal,
        hasInsurance: value,
      });
    }

    if (name === "gender") {
      setFirstStepVal({
        ...firstStepVal,
        gender: value,
      });
    }

    if (name === "specailist") {
      setThirdStepVal({
        ...thirdStepVal,
        specailist: value,
      });
    }

    if (name === "hospital") {
      setThirdStepVal({
        ...thirdStepVal,
        hospital: value,
      });
    }

    if (name === "nicotine") {
      setFourthStepVal({
        ...fourthStepVal,
        nicotine: value,
      });
    }

    if (name === "medication") {
      setThirdStepVal({
        ...thirdStepVal,
        meds: value,
      });
    }

    if (name === "drugs") {
      setFourthStepVal({
        ...fourthStepVal,
        drugs: selectedCb,
      });
    }
  }

  function handleInputChange(event) {
    const { value, name } = event.target;

    let valueCopy;

    if (name === "salary") {
      valueCopy = parseInt(value);
      setFirstStepVal({
        ...firstStepVal,
        salary: valueCopy,
      });
    }

    if (name === "id_number") {
      valueCopy = parseInt(value);
      setThirdStepVal({
        ...thirdStepVal,
        idNo: value,
      });
    }
    if (name === "job_title") {
      setFirstStepVal({
        ...firstStepVal,
        jobTitle: value,
      });
    }

    if (name === "qualification") {
      setFirstStepVal({
        ...firstStepVal,
        qualification: value,
      });
    }

    if (name === "alcohol") {
      setFourthStepVal({
        ...fourthStepVal,
        alcohol: value,
      });
    }

    if (name === "age") {
      valueCopy = parseInt(value);
      setFirstStepVal({
        ...firstStepVal,
        age: valueCopy,
      });
    }

    if (name === "tel") {
      valueCopy = parseInt(value);
      setSecondStepVal({
        ...secondStepVal,
        phone: value,
      });
    }

    if (name === "email") {
      setSecondStepVal({
        ...secondStepVal,
        emailAddress: value,
      });
    }

    if (name === "name") {
      setSecondStepVal({
        ...secondStepVal,
        firstName: value,
      });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    setFormValues({
      ...firstStepVal,
      ...secondStepVal,
      ...thirdStepVal,
      ...fourthStepVal,
      ...fifthStepVal,
    });
    // setTimeout(() => {
    //   setIsFormSubmitted(false);
    //   setResetValues(true);
    // }, 3000);
  };

  return (
    <>
      <div className="App">
        <div className="header">{OneSparkLogoSvg}</div>

        <form onSubmit={handleSubmit}>
          <FormSteps
            questionsData={questionsSections}
            ageValue={ageValue}
            formValues={formValues}
            firstStepVal={firstStepVal}
            secondStepVal={secondStepVal}
            thirdStepVal={thirdStepVal}
            fourthStepVal={fourthStepVal}
            fifthStepVal={fifthStepVal}
            setFourthStepVal={setFourthStepVal}
            handleInputChange={handleInputChange}
            handleRadio={handleRadio}
            selectedCb={selectedCb}
            setSelectedCb={setSelectedCb}
            checkedVal={checkedVal}
            setCheckedVal={setCheckedVal}
            setIsFormSubmitted={setIsFormSubmitted}
          />
          {isFormSubmitted ? (
            <div className="form-submitted">
              <div className="json bgCode">
                <pre className="prettyprint lang-json">
                  {JSON.stringify(formValues, null, 2)}
                </pre>
                <button
                  className="custom-btn btn-15 close-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsFormSubmitted(false);
                  }}
                >
                  Close Modal
                </button>
              </div>
            </div>
          ) : null}
        </form>
      </div>
    </>
  );
}

export default App;
