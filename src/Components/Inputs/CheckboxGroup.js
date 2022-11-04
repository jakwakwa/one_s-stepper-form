import React, { useState } from "react";

const CheckBoxGroup = ({ checkboxes, selectedCb, setSelectedCb }) => {
  const [selectedCheckbox, setSelectedCheckbox] = useState([]);

  const handleChange = (id) => {
    const findIdx = selectedCheckbox.indexOf(id);

    if (findIdx > -1) {
      selectedCheckbox.splice(findIdx, 1);
    } else {
      selectedCheckbox.push(id);
    }
    setSelectedCheckbox(selectedCheckbox);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedCb(JSON.stringify(selectedCb));
  };

  return (
    <div>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          {checkboxes.options.map((checkbox) => (
            <>
              <div className="checkBoxFieldWrapper ">
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
            </>
          ))}
          <div>
            <button
              type="submit"
              className="custom-btn btn-15"
              style={{
                marginTop: "40px",
                marginBottom: "40px",
                backgroundColor: "blue",
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <p>Selected checkboxes: {JSON.stringify(selectedCheckbox)}</p>
    </div>
  );
};

export default CheckBoxGroup;
