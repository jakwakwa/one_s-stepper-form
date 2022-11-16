import React from "react";
import { UilMars, UilVenus } from "@iconscout/react-unicons";

const Radio = ({
  radioOptions,
  variant,
  handleInputChange,
  itemName,
  formValues,
  checkedVal,
  setCheckedVal,
  setFormValues,
}) => {
  return (
    <div className="radioFieldWrapper">
      <div>
        {variant === "default"
          ? radioOptions.map((radioOption) => {
              return (
                <div key={radioOption.id} className="radioFieldWrapper">
                  <label
                    htmlFor={`${radioOption.id}-input-id`}
                    className="radioLabel"
                  >
                    {radioOption.label}

                    <input
                      className={`defaultRadio ${variant}`}
                      id={`${radioOption.id}-input-id`}
                      name={`${itemName}`}
                      type={"radio"}
                      onChange={handleInputChange}
                      value={radioOption.value}
                      checked={
                        itemName === "medication"
                          ? formValues.meds === radioOption.value
                          : itemName === "prev_insurance"
                          ? formValues.hasInsurance === radioOption.value
                          : formValues[itemName] === radioOption.value
                      }
                    ></input>
                  </label>
                </div>
              );
            })
          : null}

        {variant === "gender" ? (
          <div className="genderRadios">
            {radioOptions.map((radioOption) => {
              return (
                <div key={radioOption.id} className={"radioFieldWrapper"}>
                  <span className="genderWrapper gender">
                    <>
                      <input
                        className={`genderRadio ${variant}`}
                        id={`${radioOption.id}-input-id`}
                        name={"gender"}
                        type={"radio"}
                        value={radioOption.value}
                        onChange={handleInputChange}
                        checked={formValues.gender === radioOption.value}
                      ></input>
                      {radioOption.text === "Male" ? (
                        <UilMars />
                      ) : (
                        <UilVenus></UilVenus>
                      )}
                    </>
                  </span>
                  <label
                    htmlFor={`${radioOption.text}-input-id`}
                    className="genderRadioLabel"
                  >
                    {radioOption.text}
                  </label>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Radio;
