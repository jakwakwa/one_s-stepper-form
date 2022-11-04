import React from "react";

import CheckBoxGroup from "./CheckboxGroup";
import Radio from "./Radio";

const Inputs = ({ it, handleChange, ageValue, selectedCb, setSelectedCb }) => {
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
                  value={ageValue.value}
                  onChange={handleChange}
                ></input>{" "}
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
          <div className="genderRadios">
            <div className={"radioFieldWrapper"}>
              <span className="genderWrapper gender">
                <Radio
                  variant="gender"
                  id={it.id}
                  radioOptions={it.options}
                ></Radio>
              </span>
            </div>
          </div>
        </>
      ) : it.type === "radio" && it.name !== "gender" ? (
        <label>{it.label}</label>
      ) : null}

      {it.type === "radio" && it.name !== "gender" ? (
        <Radio variant="default" id={it.id} radioOptions={it.options}></Radio>
      ) : null}

      {it.type === "checkbox" && (
        <div className="wrapper">
          <CheckBoxGroup
            checkboxes={it}
            selectedCb={selectedCb}
            setSelectedCb={setSelectedCb}
          />
        </div>
      )}

      {it.type === "select" && (
        <div className="webflow-style-input">
          <select name={it.name} id="pet-select">
            <br></br>
            <option value="">Select one</option>
            {it.options.map((opt) => (
              <option value={opt.value}>
                {opt.text ? opt.text : opt.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {it.type === "search_select" && (
        <div className="webflow-style-input">
          <select name={it.name} id="title-select">
            <br></br>
            <option className="intitialOption" value="">
              Select one
            </option>
            {it.options.map((opt) => (
              <option value={opt.value}>
                {opt.text ? opt.text : opt.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {it.type === "inline_select" && (
        <div className="webflow-style-input">
          <select name={it.name} id="title-select">
            <option className="optionInitial" value="">
              Select one
            </option>
            {it.options.map((opt) => (
              <option value={opt.value}>
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
          <input name={it.name} type={it.type}></input>
        </div>
      ) : null}
    </div>
  );
};

export default Inputs;
