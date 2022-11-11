import React from "react";

import CheckBoxGroup from "./CheckboxGroup";
import Radio from "./Radio";

const Inputs = ({
  it,
  handleRadio,
  handleInputChange,
  firstStepVal,
  secondStepVal,
  thirdStepVal,
  fourthStepVal,
  setFourthStepVal,
  setFormSubmitted,
  selectedCb,
  checkedVal,
  setSelectedCb,
}) => {
  return (
    <div className="inputRow ">
      {it.type !== "radio" && (
        <label>
          {it.name === "age" ? (
            <div className="ageInpContainer">
              <label className="firstHalveOfLabelStr">
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
                  name={it.name}
                  type={it.type}
                  value={firstStepVal.age}
                  onChange={handleInputChange}
                ></input>
              </span>
              <label className="secondHalveOfLabelStr">
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
                  id={it.id}
                  radioOptions={it.options}
                  handleRadio={handleRadio}
                  checkedVal={checkedVal}
                ></Radio>
              </span>
            </div>
          </div>
        </>
      ) : it.type === "radio" && it.name !== "gender" ? (
        <label>{it.label}</label>
      ) : null}

      {it.type === "radio" && it.name !== "gender" ? (
        <Radio
          variant="default"
          id={it.id}
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
            setFormSubmitted={setFormSubmitted}
            fourthStepVal={fourthStepVal}
            setFourthStepVal={setFourthStepVal}
          />
        </div>
      )}

      {it.type === "select" && (
        <div className="webflow-style-input">
          <select name={it.name} id="pet-select" onChange={handleInputChange}>
            <option value="">Select one</option>
            {it.options.map((opt) => (
              <option value={opt.label} key={opt.id}>
                {opt.text ? opt.text : opt.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {it.type === "search_select" && (
        <div className="webflow-style-input">
          <select name={it.name} id="title-select" onChange={handleInputChange}>
            <option className="intitialOption" value="">
              Select one
            </option>
            {it.options.map((opt) => (
              <option value={opt.text ? opt.text : opt.value} key={opt.id}>
                {opt.text ? opt.text : opt.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {it.type === "inline_select" && (
        <div className="webflow-style-input">
          <select name={it.name} id="title-select" onChange={handleInputChange}>
            <option className="optionInitial" value="">
              Select one
            </option>
            {it.options.map((opt) => (
              <option value={opt.label} key={opt.id}>
                {opt.text ? opt.text : opt.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {it.type === "text" ||
      it.type === "currency" ||
      it.type === "email" ||
      it.type === "tel" ||
      it.type === "numeric" ? (
        <div className="webflow-style-input form__input">
          {firstStepVal ? (
            <input
              name={it.name}
              type={it.type}
              value={
                it.name === "salary"
                  ? firstStepVal.salary
                  : it.name === "age"
                  ? firstStepVal.age
                  : null
              }
              onChange={handleInputChange}
            ></input>
          ) : null}
          {secondStepVal ? (
            <input
              name={it.name}
              type={it.type}
              value={
                it.name === "email"
                  ? secondStepVal.email
                  : it.name === "name"
                  ? secondStepVal.name
                  : it.name === "tel"
                  ? secondStepVal.tel
                  : null
              }
              onChange={handleInputChange}
            ></input>
          ) : thirdStepVal ? (
            <input
              name={it.name}
              type={it.type}
              value={thirdStepVal.name}
              onChange={handleInputChange}
            ></input>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default Inputs;
