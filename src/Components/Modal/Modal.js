import React from "react";

const Modal = ({ formValues, setIsFormSubmitted }) => {
  return (
    <div className="bg">
      <div className="form-submitted">
        <h3>Are you sure you want to submit these details?</h3>
        <div className="json bgCode">
          <div>
            <p>
              <span>Age:</span> {formValues.age}
            </p>
            <p>
              <span>Gender:</span>
              {formValues.gender}
            </p>
            <p>
              <span>Job title:</span> {formValues.jobTitle}
            </p>
            <p>
              <span>Salary per month:</span>R {formValues.salary}
            </p>
            <p>
              <span>Qualification:</span> {formValues.qualification}
            </p>
            <p>
              <span>First Name:</span>
              {formValues.firstName}
            </p>
            <p>
              <span>Email:</span> {formValues.emailAddress}
            </p>
            <p>
              <span>Phone No:</span> {formValues.phone}
            </p>
            <p>
              <span>Last Hospital Visit:</span> {formValues.hospital}
            </p>
          </div>
          <div>
            <p>
              <span>Chronic medication:</span> {formValues.meds}
            </p>
            <p>
              <span>Specailist:</span> {formValues.specailist}
            </p>
            <p>
              <span>Smoking Habit:</span> {formValues.nicotine}
            </p>
            <p>
              <span>Drinking Habit:</span> {formValues.alcohol}
            </p>
            <p>
              <span>Do you have life Insurance:</span> {formValues.hasInsurance}
            </p>
            <p>
              <span>Drug Experiences:</span>
              {formValues.drugs.length > 0
                ? formValues.drugs.map((drug) => (
                    <ul>
                      <li key={drug}>{drug}</li>
                    </ul>
                  ))
                : "no"}
            </p>
          </div>
        </div>
        <div className="modal-btn-wrapper">
          <button
            className="custom-btn btn-15 close-btn"
            onClick={(e) => {
              e.preventDefault();
              setIsFormSubmitted(false);
            }}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
