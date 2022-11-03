import React from "react";
import { useState } from "react";
import { Button } from "antd";
import Inputs from "./Inputs/Inputs";

const FormSteps = ({
  firstQuestionData,
  secondQuestionData,
  thirdQuestionData,
  fourthQuestionData,
  fifthQuestionData,
  inputs,
  ageValue,
  handleChange,
  selectedCb,
  setSelectedCb,
}) => {
  const [current, setCurrent] = useState(0);

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
            {firstQuestionData !== undefined &&
              firstQuestionData.questions?.map((item) => (
                <Inputs
                  it={item}
                  ageValue={ageValue}
                  handleChange={handleChange}
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
              <div className="numberCircle">{1}</div>
              <div className="sectionTitle">
                <h2>How would you like us to contact you?</h2>
              </div>
            </div>
            {secondQuestionData !== undefined &&
              secondQuestionData.questions?.map((item) => (
                <Inputs
                  it={item}
                  ageValue={ageValue}
                  handleChange={handleChange}
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
            {thirdQuestionData !== undefined &&
              thirdQuestionData.questions?.map((item) => (
                <Inputs
                  it={item}
                  ageValue={ageValue}
                  handleChange={handleChange}
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
            {fourthQuestionData !== undefined &&
              fourthQuestionData.questions?.map((item) => (
                <Inputs
                  it={item}
                  ageValue={ageValue}
                  handleChange={handleChange}
                  selectedCb={selectedCb}
                  setSelectedCb={setSelectedCb}
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
                <h2>Almost Done... Just One More Step! </h2>
              </div>
            </div>
            {fifthQuestionData !== undefined &&
              fifthQuestionData.questions?.map((item) => (
                <Inputs
                  it={item}
                  ageValue={ageValue}
                  handleChange={handleChange}
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
  //   const items = steps.map((item) => ({ key: item.title, title: item.content }));

  return (
    <>
      {/* <Steps current={current} items={items} /> */}
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current > 0 && (
          <button className="custom-btn btn-15" onClick={() => prev()}>
            Previous
          </button>
        )}
        {current < steps.length - 1 && (
          <button className="custom-btn btn-15" onClick={() => next()}>
            Continue
          </button>
        )}
        {current === steps.length - 1 && <></>}
      </div>
    </>
  );
};

export default FormSteps;
