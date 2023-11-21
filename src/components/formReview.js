import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FormReview = ({ formData, onEdit }) => {
  const [totalCoreGrade, setTotalCoreGrade] = useState(0);
  const [totalElectiveGrade, setTotalElectiveGrade] = useState(0);

  useEffect(() => {
    if (formData && formData.coreSubjects && Array.isArray(formData.coreSubjects)) {
      const coreGrades = formData.coreSubjects.map((subject) => parseInt(subject.grade, 10));
      const coreSum = coreGrades.reduce((accumulator, currentGrade) => accumulator + currentGrade, 0);
      setTotalCoreGrade(coreSum);
    }

    if (formData && formData.electiveSubjects && Array.isArray(formData.electiveSubjects)) {
      const electiveGrades = formData.electiveSubjects.map((subject) => parseInt(subject.grade, 10));
      const electiveSum = electiveGrades.reduce((accumulator, currentGrade) => accumulator + currentGrade, 0);
      setTotalElectiveGrade(electiveSum);
    }
  }, [formData]);

  const totalGrade = totalCoreGrade + totalElectiveGrade;

  return (
    <div className="review">
      <>
        <h2>Form review</h2>

        <div className="userInput">
          <p>
            <strong>1. Course:</strong>{" "}
            <span style={{ padding: "1rem" }}>{formData.course}</span>
          </p>
        </div>

        <div className="userInput">
          <p>
            <strong>2. Core Subjects and Grades:</strong>
          </p>
          <ol>
            {formData.coreSubjects &&
              Array.isArray(formData.coreSubjects) &&
              formData.coreSubjects.map((subject, index) => (
                <li key={index}>
                  {subject.subject && subject.grade && (
                    <>
                      {subject.subject} - {subject.grade}
                    </>
                  )}
                </li>
              ))}

          </ol>
        </div>

        <div className="userInput">
          <p>
            <strong>3. Elective Subjects and Grades:</strong>
          </p>
          <ol>
            {formData.electiveSubjects &&
              formData.electiveSubjects.map((subject, index) => (
                <li key={index}>
                  {subject.subject && subject.grade && (
                    <>
                      {subject.subject} - {subject.grade}
                    </>
                  )}
                </li>
              ))}
          </ol>
          <br />

          <p>
            <strong>Total Grade :</strong> {totalGrade}
          </p>
        </div>

        {/* <div className="userInput">
          <p>
            <strong>4. University:</strong>{" "}
            <span style={{ padding: "1rem" }}>{formData.university}</span>
          </p>
        </div> */}

        <div className="revBtns">
          <button onClick={onEdit}>Edit Inputs</button>
          <button>
            <Link to="/programs">Proceed</Link>
          </button>
        </div>
      </>
    </div>
  );
};

export default FormReview;
