import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FormReview = ({ formData, onEdit }) => {
  // const [editMode, setEditMode] = useState(false);
  const [totalGrade, setTotalGrade] = useState(0);

  useEffect(() => {
    // Calculate the total grade when the component renders
    const grades = formData.subjects.map((subject) => parseInt(subject.grade, 10));
    const sum = grades.reduce((accumulator, currentGrade) => accumulator + currentGrade, 0);
    setTotalGrade(sum);
  }, [formData]);

  return (
    <div className="review">

      <div className="reviewContainer">
          <>
            <div className="formInput">
              <p>
                <strong>1. Course:</strong> {formData.course}
              </p>
            </div>

            <div className="formInput">
              <p>
                <strong>2. Subjects and Grades:</strong>
              </p>
              <ul>
                {formData.subjects.map((subject, index) => (
                  // <><h3>{index = 0 ? "Core" : "Elective"}</h3>
                  <li key={index}>
                    {/* <strong>Subject {index + 1}:</strong> */}
                    {subject.subject} -
                    {/* <strong>Grade:</strong> */}
                    {subject.grade}
                  </li>
                ))}
              </ul>

              {/* Display the total grade */}
              <div className="formInput">
                <p>
                  <strong>Aggregate:</strong> {totalGrade}
                </p>
              </div>
            </div>

            <div className="formInput">
              <p>
                <strong>3. University:</strong> {formData.university}
              </p>
            </div>

            <div>
            <button onClick={onEdit}>Edit Form</button>
              <button><Link to='/program'>Proceed</Link></button>
            </div>

          </>
      </div>
    </div>
  );
};

export default FormReview;
