import React, { forwardRef, useState } from "react";
import { UilMars, UilVenus } from "@iconscout/react-unicons";

export type RadioValue = React.InputHTMLAttributes<HTMLInputElement>["value"];
export type RadioChangeEvent = SurveyInputChangeEvent<RadioValue>;
export type RadioChangeEventHandler = ChangeEventHandler<RadioChangeEvent>;

export type RadioProps = Omit<RadioInputProps, "onChange"> & {
  onChange?: RadioChangeEventHandler,
  children?: React.ReactNode,
};

const Radio = ({ radioOptions, variant }) => {
  const [radioInputOptions, setRadioInputOptions] = useState({
    selected: radioOptions[0].value,
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

        {variant === "gender"
          ? radioOptions.map((radioOption) => (
              <div className={"radioFieldWrapper"}>
                <span className="genderWrapper gender">
                  <>
                    {radioOption.text === "Male" ? (
                      <UilMars />
                    ) : (
                      <UilVenus></UilVenus>
                    )}
                    <input
                      className={`genderRadio ${variant}`}
                      id={radioOption.label}
                      name={radioOption.id}
                      type={"radio"}
                      value={radioOption.value}
                      checked={radioInputOptions.selected === radioOption.value}
                      onChange={handleRadio}
                    ></input>
                  </>
                </span>
                <span className="genderRadioLabel"> {radioOption.text}</span>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default forwardRef(Radio);
