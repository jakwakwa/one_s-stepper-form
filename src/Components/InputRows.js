import React from "react";

const InputRows = ({ inputs, firstSetQuestions }) => {
  //   console.log(i.questions);
  return (
    <div className="row">
      <div className="sectionNumber">
        <div className="numberCircle">{1}</div>
        <div className="sectionTitle">
          <h2>Personal Details</h2>
        </div>
      </div>

      <button className="custom-btn btn-15">Continue</button>
    </div>
  );
};
export default InputRows;
