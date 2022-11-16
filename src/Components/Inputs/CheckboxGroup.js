import React, { useState } from "react";
import { UilCheck } from "@iconscout/react-unicons";
const CheckBoxGroup = ({
  checkboxes,

  setFormValues,
  formValues,
}) => {
  const [selCheckbox] = useState([]);
  const [setChecked] = useState(false);

  const handleChange = (id) => {
    const findIdx = selCheckbox.indexOf(id);

    if (findIdx > -1) {
      selCheckbox.splice(findIdx, 1);
      setFormValues({ ...formValues, drugs: selCheckbox });
      setChecked(true);
    } else {
      selCheckbox.push(id);
      setFormValues({ ...formValues, drugs: selCheckbox });
    }
  };

  return (
    <div>
      <div className="wrapper">
        {checkboxes.options.map((checkbox) => (
          <div key={checkbox.id} className="checkBoxFieldWrapper ">
            {/* <span className="checkBoxLabel">{checkbox.label}</span> */}
            <label className="checkboxLabel" key={checkbox.id}>
              {checkbox.label}
              <input
                type={checkboxes.type}
                className="checkbox checkbox"
                onChange={() => handleChange(checkbox.label)}
                value={checkbox.label}
                checked={formValues.drugs.includes(checkbox.label)}
              />

              <UilCheck color="#00d6ba" />
            </label>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default CheckBoxGroup;
