import React, { forwardRef, useState } from "react";
import { UilMars, UilVenus } from "@iconscout/react-unicons";

const Radio = ({ radioOptions, variant }) => {
  const [radioInputOptions, setRadioInputOptions] = useState({
    selected: "",
  });

  function handleRadio(e) {
    const selectedVal = e.target.value;

    setRadioInputOptions({
      selected: selectedVal,
    });
    console.log(selectedVal);
  }

  return (
    <div className="radioFieldWrapper">
      <div>
        {variant === "default"
          ? radioOptions.map((radioOption) => (
              <div className="radioFieldWrapper">
                <label className="radioLabel">{radioOption.label}</label>
                <input
                  className={`longTextRadio ${variant}`}
                  id={radioOption.label}
                  name={radioOption.name}
                  type={"radio"}
                  value={radioOption.value}
                  checked={radioInputOptions.selected === radioOption.value}
                  onChange={handleRadio}
                ></input>
              </div>
            ))
          : null}

        {variant === "gender" ? (
          <div className="genderRadios">
            {radioOptions.map((radioOption) => (
              <div className={"radioFieldWrapper"}>
                <span className="genderWrapper gender">
                  <>
                    <input
                      className={`genderRadio ${variant}`}
                      id={radioOption.label}
                      name={radioOption.id}
                      type={"radio"}
                      value={radioOption.value}
                      checked={radioInputOptions.selected === radioOption.value}
                      onChange={handleRadio}
                    ></input>
                    {radioOption.text === "Male" ? (
                      <UilMars />
                    ) : (
                      <UilVenus></UilVenus>
                    )}
                  </>
                </span>
                <span className="genderRadioLabel"> {radioOption.text}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default forwardRef(Radio);
