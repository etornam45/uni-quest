import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const FormReview = ({ formData, onEdit }) => {
  const [editMode, setEditMode] = useState(false);
  const [totalGrade, setTotalGrade] = useState(0);

  const history = useHistory();

  useEffect(() => {
    // Calculate the total grade when the component renders
    const grades = formData.subjects.map((subject) => parseInt(subject.grade, 10));
    const sum = grades.reduce((accumulator, currentGrade) => accumulator + currentGrade, 0);
    setTotalGrade(sum);
  }, [formData]);

  return (
    <div className="reviewContainer">
      {/* <h2>{editMode ? "Edit Your Form" : "Review Your Form Data"}</h2> */}

      {/* {editMode ? (
        <button onClick={() => setEditMode(false)}>Back to Review</button>
      ) : (
        <button onClick={() => setEditMode(true)}>Edit Form</button>
      )} */}

      {editMode ? (
        <div>
          {/* Render the form fields here */}
          {/* You can reuse the form fields from the DataForm component */}
        </div>
      ) : (
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
            <button onClick={history.goBack} >Edit</button>
            <button><Link to='/data-form'>Edit</Link></button>
            <button><Link to='/program'>Proceed</Link></button>
          </div>

        </>
      )}
    </div>
  );
};

export default FormReview;
