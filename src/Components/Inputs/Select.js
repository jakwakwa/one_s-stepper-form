import React from "react";

const SelectField = ({ it, name, handleInputChange, value }) => {
  return (
    <div className="message-box">
      <div className="webflow-style-input">
        <select
          name={it.name}
          id={`${it.name}-input-id`}
          onChange={handleInputChange}
          type={
            it.type === "inline_select"
              ? "inline-select"
              : it.type === "select"
              ? "select"
              : "search_select"
          }
        >
          {value === "" ? (
            <option className="blah" value="">
              Select one
            </option>
          ) : null}

          {it.options.map((opt) => (
            <option value={opt.label} key={opt.id}>
              {opt.text ? opt.text : opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectField;
