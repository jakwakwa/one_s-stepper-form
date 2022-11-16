import React, { useState } from "react";
import Inputs from "./Inputs/Inputs";

const FormSteps = ({
  questionsData,
  handleInputChange,
  formValues,
  handleReset,
  setFormValues,
  checkedVal,
  setCheckedVal,
  setIsFormSubmitted,
  errorMsg,
  isValidForm,
}) => {
  const [current, setCurrent] = useState(0);
  const { firstSet, secondSet, thirdSet, fourthSet, fifthSet } = questionsData;

  const steps = [
    {
      title: "First",
      content: (
        <>
          <div className="row">
            <div className="sectionNumber">
              <div className="numberCircle">{1}</div>
              <div className="sectionTitle">
                <h2 className="form-headings">
                  Kindly Share Your Personal Information
                </h2>
              </div>
            </div>
            {firstSet !== undefined &&
              firstSet?.map((item) => (
                <Inputs
                  key={item.id}
                  it={item}
                  handleInputChange={handleInputChange}
                  formValues={formValues}
                />
              ))}
          </div>
        </>
      ),
    },
    {
      title: "Second",
      content: (
        <>
          <div className="row">
            <div className="sectionNumber">
              <div className="numberCircle">{2}</div>
              <div className="sectionTitle">
                <h2 className="form-headings">
                  How would you like us to contact you?
                </h2>
              </div>
            </div>
            {secondSet !== undefined &&
              secondSet?.map((item) => (
                <Inputs
                  key={item.id}
                  it={item}
                  handleInputChange={handleInputChange}
                  formValues={formValues}
                />
              ))}
          </div>
        </>
      ),
    },
    {
      title: "third",
      content: (
        <>
          <div className="row">
            <div className="sectionNumber">
              <div className="numberCircle">{3}</div>
              <div className="sectionTitle">
                <h2 className="form-headings">
                  Tell us more about your health
                </h2>
              </div>
            </div>
            {thirdSet !== undefined &&
              thirdSet?.map((item) => (
                <Inputs
                  key={item.id}
                  it={item}
                  handleInputChange={handleInputChange}
                  formValues={formValues}
                  checkedVal={checkedVal}
                  setCheckedVal={setCheckedVal}
                />
              ))}
          </div>
        </>
      ),
    },
    {
      title: "fourth",
      content: (
        <>
          <div className="row">
            <div className="sectionNumber">
              <div className="numberCircle">{4}</div>
              <div className="sectionTitle">
                <h2 className="form-headings">Lifestyle Choices</h2>
              </div>
            </div>
            {fourthSet !== undefined &&
              fourthSet?.map((item) => (
                <Inputs
                  key={item.id}
                  it={item}
                  handleInputChange={handleInputChange}
                  formValues={formValues}
                  setFormValues={setFormValues}
                />
              ))}
          </div>
        </>
      ),
    },
    {
      title: "Last",
      content: (
        <>
          <div className="row">
            <div className="sectionNumber">
              <div className="numberCircle">{5}</div>
              <div className="sectionTitle">
                <h2 className="form-headings">
                  Almost Done... Just One More Step!
                </h2>
              </div>
            </div>
            {fifthSet !== undefined &&
              fifthSet?.map((item) => (
                <Inputs
                  key={item.id}
                  it={item}
                  handleInputChange={handleInputChange}
                  formValues={formValues}
                  setIsFormSubmitted={setIsFormSubmitted}
                />
              ))}
          </div>
        </>
      ),
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current > 0 ? (
          <button
            className="custom-btn btn-15 prev-btn"
            onClick={(e) => {
              e.preventDefault();
              if (current < 5) {
                setIsFormSubmitted(false);
                prev();
              } else {
                prev();
              }
            }}
          >
            Previous
          </button>
        ) : null}
        {current < steps.length - 1 ? (
          <button
            className="custom-btn btn-15 next-btn"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo(0, 0);
              next();
            }}
          >
            Continue
          </button>
        ) : null}

        {current > 3 ? (
          <>
            <button type="submit" className="custom-btn btn-15 submit-btn">
              Submit
            </button>
            <button
              className="custom-btn btn-15 reset-btn"
              onClick={(e) => {
                e.preventDefault();
                setCurrent(0);
                handleReset();
              }}
            >
              Reset
            </button>
          </>
        ) : null}
        {errorMsg.length > 0 && !isValidForm ? (
          <div className="error-msg">{errorMsg}</div>
        ) : null}
      </div>
    </>
  );
};

export default FormSteps;
