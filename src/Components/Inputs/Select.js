import React from "react";

const SelectField = ({ it, name, handleInputChange, value }) => {
  return (
    <div className="message-box">
      <div className="webflow-style-input">
        <select
          name={it.name}
          id={`${it.name}-input-id`}
          onChange={handleInputChange}
          type={"select"}
        >
          {value.length < !0 ? (
            <option className="blah" value="">
              Select one
            </option>
          ) : null}
          {it.options.map((opt) => {
            if (opt.text !== undefined) {
              return (
                <option value={opt.text} key={opt.id}>
                  {opt.text}
                </option>
              );
            } else {
              return (
                <option value={opt.label} key={opt.id}>
                  {opt.label}
                </option>
              );
            }
          })}
        </select>
      </div>
    </div>
  );
};

export default SelectField;
