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
        <>
          <h2>Form review</h2>


          <div className="userInput">
            <p>
              <strong>1. Course:</strong> <p style={{display: "inline", padding: "1rem"}}>{formData.course}</p>
            </p>
          </div>

          <div className="userInput">
            <p>
              <strong>2. Subjects and Grades:</strong>
            </p>
            <ol>
              {formData.subjects.map((subject, index) => (
                // <><h3>{index = 0 ? "Core" : "Elective"}</h3>
                <li key={index}>
                  {/* <strong>Subject {index + 1}:</strong> */}
                  {subject.subject} -
                  {/* <strong>Grade:</strong> */}
                  {subject.grade}
                </li>
              ))}
            </ol>

            {/* Display the total grade */}
            <div className="userInput">
              <p>
                <strong>Aggregate:</strong> <p style={{display: "inline"}}>{totalGrade}</p>
              </p>
            </div>
          </div>

          <div className="userInput">
            <p>
              <strong>3. University:</strong> <p style={{padding: "1rem"}}>-{formData.university}</p>
            </p>
          </div>

          <div className="revBtns">
            <button onClick={onEdit}>Edit Inputs</button>
            <button><Link to="/programs">Proceed</Link></button>
          </div>

        </>
      </div>
  );
};

export default FormReview;
