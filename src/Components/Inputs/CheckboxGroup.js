import React, { useState } from "react";

const CheckBoxGroup = ({
  checkboxes,
  selectedCb,
  setSelectedCb,
  setFourthStepVal,
  fourthStepVall,
}) => {
  const [selCheckbox] = useState([]);

  const handleChange = (id) => {
    const findIdx = selCheckbox.indexOf(id);

    if (findIdx > -1) {
      selCheckbox.splice(findIdx, 1);
      setSelectedCb(selCheckbox);
    } else {
      selCheckbox.push(id);
      setSelectedCb(selCheckbox);
    }

    setFourthStepVal({
      ...fourthStepVall,
      drugs: selCheckbox,
    });


  };



  return (
    <div>
      <div className="wrapper">
        {checkboxes.options.map((checkbox) => (

            <div key={checkbox.id} className="checkBoxFieldWrapper ">
              <span className="checkBoxLabel">{checkbox.label}</span>
              <label key={checkbox.id}>
                {checkbox.text}
                <input
                  type={checkboxes.type}
                  className="defaultCheckbox longCheckbox"
                  onChange={() => handleChange(checkbox.label)}
                  selected={selectedCb.includes(checkbox.id)}
                />
              </label>
            </div>

        ))}
        <div>

        </div>
      </div>
    </div>
  );
};

export default CheckBoxGroup;
