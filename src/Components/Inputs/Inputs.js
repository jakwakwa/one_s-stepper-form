import React from "react";

import CheckBoxGroup from "./CheckboxGroup";
import InputField from "./InputField";
import Radio from "./Radio";
import SelectField from "./Select";

const Inputs = ({
  it,
  handleRadio,
  handleInputChange,
  firstStepVal,
  secondStepVal,
  thirdStepVal,
  fourthStepVal,
  setFourthStepVal,
  setIsFormSubmitted,
  selectedCb,
  checkedVal,
  setSelectedCb,
}) => {
  const [isTouched, setIsTouched] = React.useState(false);
  const handleBlur = (e) => {
    setIsTouched(true);
  };

  return (
    <div className="inputRow ">
      {it.type !== "radio" && (
        <label htmlFor={`${it.name}-input-id`}>
          {it.name === "age" ? (
            <div className="ageInpContainer">
              <label htmlFor="age-input-field" className="firstHalveOfLabelStr">
                {it.label
                  .substring(0, it.label.length / 2)
                  .replace(
                    new RegExp("(?:{([^{}]*))?age(?:([^{}]*)})?", "g"),
                    ""
                  )}
              </label>
              <span className="webflow-style-input spanInput">
                <input
                  className="ageInput"
                  id={`${it.name}-input-id`}
                  placeholder={23}
                  name={it.name}
                  type={it.type}
                  value={firstStepVal.age === 0 ? "" : firstStepVal.age}
                  onChange={handleInputChange}
                ></input>
              </span>
              <label
                id={`${it.name}-input-id`}
                className="secondHalveOfLabelStr"
              >
                {it.label.substring(it.label.length / 2)}
              </label>{" "}
            </div>
          ) : (
            it.label
          )}
        </label>
      )}

      {it.type === "radio" && it.name === "gender" ? (
        <>
          <div className="genderRadios" key={it.id}>
            <div className={"radioFieldWrapper"}>
              <span className="genderWrapper gender">
                <Radio
                  variant="gender"
                  name={"gender"}
                  id={`${it.name}-input-id`}
                  radioOptions={it.options}
                  handleRadio={handleRadio}
                  checkedVal={checkedVal}
                ></Radio>
              </span>
            </div>
          </div>
        </>
      ) : it.type === "radio" && it.name !== "gender" ? (
        <label htmlFor={`${it.name}-input-id`}>{it.label}</label>
      ) : null}

      {it.type === "radio" && it.name !== "gender" ? (
        <Radio
          variant="default"
          id={`${it.name}-input-id`}
          radioOptions={it.options}
          itNo={it.name}
          checkedVal={checkedVal}
          setCheckedVal={checkedVal}
          handleRadio={handleRadio}
        ></Radio>
      ) : null}

      {it.type === "checkbox" && (
        <div className="wrapper">
          <CheckBoxGroup
            checkboxes={it}
            selectedCb={selectedCb}
            setSelectedCb={setSelectedCb}
            setIsFormSubmitted={setIsFormSubmitted}
            fourthStepVal={fourthStepVal}
            setFourthStepVal={setFourthStepVal}
          />
        </div>
      )}

      {it.type === "select" && (
        <SelectField
          it={it}
          handleInputChange={handleInputChange}
          value={firstStepVal.qualification}
        />
      )}

      {it.type === "search_select" && (
        <SelectField
          it={it}
          handleInputChange={handleInputChange}
          value={firstStepVal.jobTitle}
        />
      )}

      {it.type === "inline_select" && (
        <SelectField
          it={it}
          handleInputChange={handleInputChange}
          value={fourthStepVal.alcohol}
        />
      )}

      {it.type === "text" ||
      it.type === "currency" ||
      it.type === "email" ||
      it.type === "tel" ||
      it.type === "numeric" ? (
        <>
          {firstStepVal ? (
            <InputField
              it={it}
              value={firstStepVal}
              handleInputChange={handleInputChange}
            />
          ) : null}

          {secondStepVal ? (
            <InputField
              it={it}
              value={secondStepVal}
              handleInputChange={handleInputChange}
              onBlur={handleBlur}
              isTouched={isTouched}
            />
          ) : null}

          {thirdStepVal ? (
            <InputField
              it={it}
              value={thirdStepVal}
              handleInputChange={handleInputChange}
            />
          ) : null}
        </>
      ) : null}
    </div>
  );
};

export default Inputs;
