import React from "react";

const InputField = ({
  it,
  value,
  handleInputChange,
  val,
  secondStepVal,
  firstStepVal,
  fourthStepVal,
  setFourthStepVal,
  setIsFormSubmitted,
  onBlur,
  isTouched,
}) => {
  let error;
  let salaryTempStr;

  if (it.name === "salary") {
    if (value.salary === 0) {
      salaryTempStr = value.salary;
      //   no error
      error = "no-error";
    } else if (value.salary > 0) {
      // salaryTempStr = value.salary;
      // no error
      error = "no-error";
      salaryTempStr = value.salary;
      // error = "higher     ";
    } else if (salaryTempStr === undefined) {
      error = "required";
    }
  }

  return (
    <div className="message-box">
      <div className="webflow-style-input">
        <input
          name={it.name}
          id={`${it.name}-input-id`}
          onChange={handleInputChange}
          type={it.type}
          placeholder={`Enter your ${it.name}`}
          onBlur={onBlur}
          value={
            it.name === "salary"
              ? it.salary
              : it.name === "email"
              ? value.emailAddress
              : it.name === "name"
              ? value.firstName
              : it.name === "tel"
              ? value.phone
              : ""
              ? value.id_number === 0
              : value.id_number
          }
        />
        {it.name === "salary" ? (
          <span
            className={`validation ${error === "required" ? "show" : "hide"}`}
          >
            {error}
          </span>
        ) : null}

        {it.name === "name" ? (
          <span
            className={`validation ${
              isTouched && value.firstName.length === 0 ? "show" : "hide"
            }`}
          >
            "required"
          </span>
        ) : null}

        {it.name === "email" ? (
          <span
            className={`validation ${
              isTouched && value.emailAddress.length === 0 ? "show" : "hide"
            }`}
          >
            "required"
          </span>
        ) : null}

        {it.name === "tel" ? (
          <span
            className={`validation ${
              isTouched && value.phone.length === 0 ? "show" : "hide"
            }`}
          >
            "required"
          </span>
        ) : null}

        {/*

         */}
      </div>
    </div>
  );
};

export default InputField;
