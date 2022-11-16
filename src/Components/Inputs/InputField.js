import React from "react";

const InputField = ({
  it,
  value,
  handleInputChange,
  setIsFormSubmitted,
  onBlur,
  isTouched,
}) => {
  let error;
  let salaryTempStr;
  let phoneValid;

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

  if (it.type === "tel") {
    if (typeof value.phone === "number") {
      const newS = value.phone.toString();
      const newphoneStr = newS.split();
      if (newphoneStr[0].length < 10) {
        error = "required";
        phoneValid = false;
      } else {
        phoneValid = true;
      }
    }
    // console.log(toString(value.phone).length);
    // console.log("phoneValid", phoneValid);
  }

  return (
    <div className="message-box">
      <div className="webflow-style-input">
        {it.type === "currency" ? (
          <span style={{ marginRight: "10px" }}>R</span>
        ) : it.name === "tel" ? (
          <span style={{ marginRight: "10px" }}>+27</span>
        ) : null}
        {it.name !== "tel" ? (
          <input
            name={it.name}
            id={`${it.name}-input-id`}
            onChange={handleInputChange}
            type={it.type}
            placeholder={`Enter your ${
              it.name === "id_number" ? "id number" : it.name
            }`}
            onBlur={onBlur}
            value={
              it.name === "name"
                ? value.firstName
                : it.name === "email"
                ? value.emailAddress
                : it.name === "id_number"
                ? value.idNo
                : it.name === "salary"
                ? value.salary
                : ""
            }
          />
        ) : (
          <input
            name={it.name}
            id={`${it.name}-input-id`}
            onChange={handleInputChange}
            type={"tel"}
            placeholder="123-452-6782"
            onBlur={onBlur}
            value={value.phone}
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            maxLength={it.type === "tel" ? "10" : ""}
            autoComplete="on"
          />
        )}

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
            required
          </span>
        ) : null}

        {it.name === "email" ? (
          <span
            className={`validation ${
              isTouched && value.emailAddress.length === 0 ? "show" : "hide"
            }`}
          >
            required
          </span>
        ) : null}

        {it.name === "tel" ? (
          <span
            className={`validation ${
              isTouched && !phoneValid ? "show" : "hide"
            }`}
          >
            {"not a valid phone number"}
          </span>
        ) : null}

        {/*

         */}
      </div>
    </div>
  );
};

export default InputField;
