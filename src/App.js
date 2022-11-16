import * as React from "react";

import { useState } from "react";
import "./App.scss";
import { fetchQuestions } from "./Utils/ApiHelper";
import DefautlValues from "./DefaultValues/DefaultValues";
import FormSteps from "./Components/FormSteps";
import "antd/dist/antd.min.css";
import Modal from "./Components/Modal/Modal";
import OneSparkLogoSvg from "./Logo/Logo";
import LoadSpinner from "./Components/Spinner/LoadSpinner";
import { isValidValues } from "./Utils/Validation";

function App() {
  let questionsSections = null;
  const [questionsAPI, setQuestionsAPI] = React.useState([]);
  const [formValues, setFormValues] = useState(DefautlValues);
  const [ageValue] = useState(0);

  const [checkedVal, setCheckedVal] = useState("");
  const [loadingData, setLoadingData] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  React.useEffect(() => {
    if (!questionsAPI) {
      return;
    }

    setQuestionsAPI(null);

    fetchQuestions(
      "https://6356e07f2712d01e14fe89d4.mockapi.io/api/v1/questions"
    ).then((questions) => {
      return setQuestionsAPI(questions);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loadingData) {
    questionsSections = {
      firstSet: questionsAPI?.sections[0].questions,
      secondSet: questionsAPI?.sections[1].questions,
      thirdSet: questionsAPI?.sections[2].questions,
      fourthSet: questionsAPI?.sections[3].questions,
      fifthSet: questionsAPI?.sections[4].questions,
    };
  }

  function handleInputChange(e) {
    const { value, name } = e.target;

    setFormValues({
      salary: name === "salary" ? parseInt(value) : formValues.salary,
      age: name === "age" ? parseInt(value) : formValues.age,
      qualification:
        name === "qualification" ? value : formValues.qualification,
      jobTitle: name === "job_title" ? value : formValues.jobTitle,
      gender: name === "gender" ? value : formValues.gender,
      idNo: name === "id_number" ? parseInt(value) : formValues.idNo,
      firstName: name === "name" ? value : formValues.firstName,
      emailAddress: name === "email" ? value : formValues.emailAddress,
      phone: name === "tel" ? parseInt(value) : formValues.phone,
      specailist: name === "specailist" ? value : formValues.specailist,
      meds: name === "medication" ? value : formValues.meds,
      hospital: name === "hospital" ? value : formValues.hospital,
      nicotine: name === "nicotine" ? value : formValues.nicotine,
      alcohol: name === "alcohol" ? value : formValues.alcohol,
      drugs: name === "drugs" ? value : formValues.drugs,
      hasInsurance: name === "prev_insurance" ? value : formValues.hasInsurance,
    });
  }

  React.useEffect(() => {
    setIsValidForm(isValidValues(formValues));
  }, [formValues]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!isValidForm) {
      setErrorMsg("Please fill in all the required fields");
      return;
    }

    setIsFormSubmitted(true);
    setFormValues({
      ...formValues,
    });
  }

  function handleReset() {
    setFormValues(DefautlValues);
  }

  // Fake loading
  setTimeout(() => {
    setLoadingData(true);
  }, 3000);
  if (!loadingData) {
    return (
      <div className="page-loader">
        <LoadSpinner />;
      </div>
    );
  } else {
    return (
      <>
        <div className="App">
          <div className="header">{OneSparkLogoSvg}</div>
          <form onSubmit={handleSubmit}>
            <>
              <FormSteps
                questionsData={questionsSections}
                ageValue={ageValue}
                formValues={formValues}
                handleInputChange={handleInputChange}
                handleReset={handleReset}
                checkedVal={checkedVal}
                setCheckedVal={setCheckedVal}
                setIsFormSubmitted={setIsFormSubmitted}
                setFormValues={setFormValues}
                isValidForm={isValidForm}
                errorMsg={errorMsg}
              />
            </>
          </form>
          {isFormSubmitted ? (
            <Modal
              formValues={formValues}
              setIsFormSubmitted={setIsFormSubmitted}
            />
          ) : null}
        </div>
      </>
    );
  }
}

export default App;
