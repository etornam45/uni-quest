import React from "react";

const FormReview = ({ formData, onEdit }) => {
  return (
    <div className="formReviewContainer">
      <h2>Form Review</h2>

      <div className="formReview">
        <div className="formInput">
          <label>1. Course</label>
          <p>{formData.course}</p>
        </div>

        <div className="formInput">
          <label>2. Subjects and Grades</label>
          <div className="reviewSubjects">
            {formData.subjects.map((subject, index) => (
              <div key={index} className="reviewSubject">
                <p>{`Subject ${index + 1}: ${subject.subject}`}</p>
                <p>{`Grade: ${subject.grade}`}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="formInput">
          <label>3. University</label>
          <p>{formData.university}</p>
        </div>
      </div>

      <div className="editButton">
        <button onClick={onEdit}>Edit Form</button>
      </div>
    </div>
  );
};

export default FormReview;
