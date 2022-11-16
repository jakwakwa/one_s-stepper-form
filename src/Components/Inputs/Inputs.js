import React from "react";

import CheckBoxGroup from "./CheckboxGroup";
import InputField from "./InputField";
import Radio from "./Radio";
import SelectField from "./Select";

const Inputs = ({
  it,
  handleInputChange,
  formValues,
  setFormValues,
  setIsFormSubmitted,
  checkedVal,
  setCheckedVal,
}) => {
  const [isTouched, setIsTouched] = React.useState(false);
  const handleBlur = (e) => {
    setIsTouched(true);
  };

  return (
    <div className={`inputRow ${it.name} `}>
      {it.name === "alcohol" ? (
        <label id={`${it.name}-input-id`} className="selectSpanLabelStr">
          {it.label
            .substring(0, it.label.length / 2)
            .replace(
              new RegExp("(?:{([^{}]*))?label(?:([^{}]*)})?", "g"),
              ""
            )}{" "}
          <SelectField
            it={it}
            handleInputChange={handleInputChange}
            value={formValues.qualification}
          />
          units {it.label.substring(it.label.length - 8)}
        </label>
      ) : null}

      {it.type !== "radio" && it.name !== "alcohol" ? (
        <label className="default-label" htmlFor={`${it.name}-input-id`}>
          {it.name === "age" ? (
            <div className="age-input-container">
              <label htmlFor="age-label" className="firstHalveOfLabelStr">
                {it.label
                  .substring(0, it.label.length / 2)
                  .replace(
                    new RegExp("(?:{([^{}]*))?age(?:([^{}]*)})?", "g"),
                    ""
                  )}
              </label>{" "}
              a
              <span className="webflow-style-input spanInput">
                <input
                  className="ageInput"
                  id={`${it.name}-input-id`}
                  placeholder={""}
                  name={it.name}
                  type="number"
                  min="18"
                  max="115"
                  value={formValues.age === 0 ? "" : formValues.age}
                  onChange={handleInputChange}
                ></input>
              </span>
              <label
                id={`${it.name}-input-id`}
                className="secondHalveOfLabelStr"
              >
                {it.label.substring(it.label.length / 2)}
              </label>
            </div>
          ) : (
            it.label
          )}
        </label>
      ) : null}

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
                  checkedVal={checkedVal}
                  formValues={formValues}
                  handleInputChange={handleInputChange}
                ></Radio>
              </span>
            </div>
          </div>
        </>
      ) : (it.type === "radio" && it.name !== "gender") ||
        (it.type === "inline-select" &&
          it.type === "select" &&
          it.name === "alcohol") ? (
        <label className="default--alt" htmlFor={`${it.name}-input-id`}>
          {it.label}
        </label>
      ) : null}

      {it.type === "radio" && it.name !== "gender" ? (
        <Radio
          variant="default"
          id={`${it.name}-input-id`}
          radioOptions={it.options}
          itemName={it.name}
          checkedVal={checkedVal}
          setCheckedVal={setCheckedVal}
          formValues={formValues}
          setFormValues={setFormValues}
          handleInputChange={handleInputChange}
        ></Radio>
      ) : null}

      {it.type === "checkbox" && (
        <div className="wrapper">
          <CheckBoxGroup
            checkboxes={it}
            setIsFormSubmitted={setIsFormSubmitted}
            formValues={formValues}
            setFormValues={setFormValues}
          />
        </div>
      )}

      {it.type === "select" && (
        <SelectField
          it={it}
          handleInputChange={handleInputChange}
          value={formValues.qualification}
        />
      )}

      {it.type === "search_select" && (
        <SelectField
          it={it}
          handleInputChange={handleInputChange}
          value={formValues.jobTitle}
        />
      )}

      {it.type === "text" ||
      it.type === "currency" ||
      it.type === "email" ||
      it.type === "tel" ||
      it.type === "numeric" ? (
        <>
          <InputField
            it={it}
            value={formValues}
            handleInputChange={handleInputChange}
            onBlur={handleBlur}
            isTouched={isTouched}
          />
        </>
      ) : null}
    </div>
  );
};

export default Inputs;
