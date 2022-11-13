import React from "react";
import { UilMars, UilVenus } from "@iconscout/react-unicons";

const Radio = ({
  radioOptions,
  variant,
  handleRadio,
  itNo,
  firstStepVal,
  checkedVal,
  setCheckedVal,
}) => {
  return (
    <div className="radioFieldWrapper">
      <div>
        {variant === "default"
          ? radioOptions.map((radioOption) => {
              return (
                <div key={radioOption.id} className="radioFieldWrapper">
                  <label
                    htmlFor={`${radioOption.name}-input-id`}
                    className="radioLabel"
                  >
                    {radioOption.label}
                  </label>
                  <input
                    className={`longTextRadio ${variant}`}
                    id={`${radioOption.label}-input-id`}
                    name={`${itNo}`}
                    type={"radio"}
                    value={radioOption.value}
                    onChange={handleRadio}
                  ></input>
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
                        id={`${radioOption.text}-input-id`}
                        name={"gender"}
                        type={"radio"}
                        value={radioOption.value}
                        // checked={radioOption.value}
                        onChange={handleRadio}
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
