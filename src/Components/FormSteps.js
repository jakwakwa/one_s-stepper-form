import React, { useState } from "react";
import { Button } from "antd";
import Inputs from "./Inputs/Inputs";

const FormSteps = ({
  questionsData,
  handleInputChange,
  handleRadio,
  firstStepVal,
  secondStepVal,
  thirdStepVal,
  fourthStepVal,
  fifthStepVal,
  setFourthStepVal,
  selectedCb,
  checkedVal,
  setCheckedVal,
  setIsFormSubmitted,
  setSelectedCb,
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
                <h2>Kindly Share Your Personal Information</h2>
              </div>
            </div>
            {firstSet !== undefined &&
              firstSet?.map((item) => (
                <Inputs
                  key={item.id}
                  it={item}
                  handleRadio={handleRadio}
                  handleInputChange={handleInputChange}
                  firstStepVal={firstStepVal}
                  secondStepVal={false}
                />
              ))}
            {current > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            )}
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
                <h2>How would you like us to contact you?</h2>
              </div>
            </div>
            {secondSet !== undefined &&
              secondSet?.map((item) => (
                <Inputs
                  key={item.id}
                  it={item}
                  handleRadio={handleRadio}
                  handleInputChange={handleInputChange}
                  firstStepVal={false}
                  secondStepVal={secondStepVal}
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
                <h2>Tell us more about your health</h2>
              </div>
            </div>
            {thirdSet !== undefined &&
              thirdSet?.map((item) => (
                <Inputs
                  key={item.id}
                  it={item}
                  handleRadio={handleRadio}
                  handleInputChange={handleInputChange}
                  firstStepVal={false}
                  secondStepVal={false}
                  thirdStepVal={thirdStepVal}
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
                <h2>Lifestyle Choices</h2>
              </div>
            </div>
            {fourthSet !== undefined &&
              fourthSet?.map((item) => (
                <Inputs
                  key={item.id}
                  it={item}
                  handleRadio={handleRadio}
                  selectedCb={selectedCb}
                  setSelectedCb={setSelectedCb}
                  handleInputChange={handleInputChange}
                  firstStepVal={false}
                  secondStepVal={false}
                  fourthStepVal={fourthStepVal}
                  setFourthStepVal={setFourthStepVal}
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
                <h2>Almost Done... Just One More Step!</h2>
              </div>
            </div>
            {fifthSet !== undefined &&
              fifthSet?.map((item) => (
                <Inputs
                  key={item.id}
                  it={item}
                  handleInputChange={handleInputChange}
                  handleRadio={handleRadio}
                  firstStepVal={false}
                  secondStepVal={false}
                  fifthStepVal={fifthStepVal}
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
        {/*  */}
        {current > 0 && (
          <button
            className="custom-btn btn-15"
            style={{
              backgroundColor: "rgba(119,50,170,0.9)",
            }}
            onClick={() => prev()}
          >
            Previous
          </button>
        )}
        {current < steps.length - 1 && (
          <button className="custom-btn btn-15" onClick={(e) => { e.preventDefault();
            next()}}>
            Continue
          </button>
        )}

      {current > 3 ? <button
          type="submit"
          className="custom-btn btn-15"
          style={{
            marginTop: "40px",
            marginBottom: "40px",
            backgroundColor: "blue",
          }}
        >
          Submit
        </button> : ""}


      </div>
    </>
  );
};

export default FormSteps;
